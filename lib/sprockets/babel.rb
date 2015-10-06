require 'babel/transpiler'
require 'babel'
require 'sprockets'
require 'pathname'
require 'erb'
require 'v8'
require 'logger'

module Sprockets
  module Babel
    class Template < Tilt::Template
      self.default_mime_type = 'application/javascript'

      def self.engine_initialized?
        true
      end

      def initialize_engine
      end

      def prepare
      end

      def evaluate(scope, locals, &block)
        source_root = get_source_root(scope)
        babel_options = {
          modules: 'inline',
          moduleIds: true,
          moduleId: get_module_name(source_root),
          filename: file,
          filenameRelative: get_filename_relative(source_root)
        }.merge(options.merge(::Babel.options))
        Babel.transform(data, babel_options)['code']
      end

      private

      def get_source_root(scope)
        asset_paths = scope.environment.paths
        asset_paths.each do |path|
          if file.start_with?(path)
            return path
          end
        end
        ''
      end

      def get_filename_relative(source_root)
        return '' unless source_root
        Pathname.new(file).relative_path_from(Pathname.new(source_root))
      end

      def get_module_name(source_root)
        return basename(file) unless source_root
        basename(file.gsub(source_root, ''))
      end

      def basename(file)
        file.gsub(/\.[^\/]+$/, '').gsub(/^\//, '')
      end
    end

    class Console
      def initialize
        @logger = Logger.new(STDOUT)
      end

      def log(message)
        @logger.info "Sprockets Babel Log: #{message}"
      end

      def warn(message)
        @logger.warn "Sprockets Babel Warning: #{message}"
      end

      def error(message)
        @logger.warn "Sprockets Babel Error: #{message}"
      end
    end

    def self.transform(code, options = {})
      modules = options[:modules] || 'inline'
      babel_transform = context[:babel][:transform]
      result = babel_transform.call(code, options.merge(
        'ast' => false,
        'modules' => modules == 'inline' ? 'amd' : modules
      ))
      if modules == 'inline'
        result['code'] = transform_inline(result['code'], options)
      end
      result
    end

    def self.context
      @context ||= begin
        ctx = V8::Context.new
        ctx.eval('var self = this; ' + File.read(::Babel::Transpiler.script_path))
        ctx['console'] = Console.new
        ctx
      end
    end

    private

    def self.transform_inline(code, options)
      prefix = <<-JS
        var #{escape_module_id(options[:moduleId])} = (function() {
          var exports = {};
          var define = function(moduleId, importIds, body) {
            var resolveRelativeModuleId = function(targetId) {
              var targetParts = targetId.split(/\\//),
                basename = targetParts.pop();
              if ((targetParts.length == 0) || (targetParts[0] != '.' && targetParts[0] != '..')) {
                return targetId;
              }
              if (targetParts[0] == '.') {
                targetParts.shift();
              }

              var fromParts = moduleId.split(/\\//);
              fromParts.pop();
              while (targetParts.length > 0 && targetParts[0] == '..') {
                targetParts.shift();
                if (fromParts.length > 0) {
                  fromParts.pop();
                }
              }
              var parts = fromParts.concat(targetParts);
              return (parts.length == 0) ? basename : parts.join('/') + '/' + basename;
            };

            importIds.shift();
            var imports = [exports],
              module = {exports: null};
            for (var i = 0; i < importIds.length; i++) {
              if (importIds[i] == 'module') {
                imports.push(module);
                continue;
              }

              var importId = resolveRelativeModuleId(importIds[i]),
                variable = '$__' + encodeURIComponent(importId.replace(/^\\.\\//, ''))
                  .replace(/%|-/, '') + '__';
              imports.push((typeof window === 'undefined') ? global[variable] : window[variable]);
            }
            body.apply(undefined, imports);
            if (module.exports != null) {
              exports = module.exports;
            }
          };
      JS
      suffix = <<-JS
          return exports;
        })();
        if ((typeof window === 'undefined') && (typeof global !== 'undefined')) {
          global.#{escape_module_id(options[:moduleId])} = #{escape_module_id(options[:moduleId])};
        }
      JS
      prefix + "\n" + code + "\n" + suffix
    end

    def self.resolve_relative_module_id(source_module_id, target_module_id)
      target_path_parts = target_module_id.split(/\//)
      basename = target_path_parts.pop
      return target_module_id if target_path_parts.length == 0
      return target_module_id if target_path_parts[0] != '.' && target_path_parts[0] != '..'
      target_path_parts.shift if target_path_parts[0] == '.'

      source_path_parts = source_module_id.split(/\//)
      source_path_parts.pop # ignore filename part
      while target_path_parts.length > 0 && target_path_parts[0] == '..'
        target_path_parts.shift
        source_path_parts.pop if source_path_parts.length > 0
      end
      parts = source_path_parts.concat(target_path_parts)
      if parts.length == 0
        return basename
      end
      parts.join('/') + '/' + basename
    end

    def self.escape_module_id(module_id)
      '$__' + ERB::Util.url_encode(module_id.gsub(/^\.\//, '')).gsub(/%|-/, '') + '__'
    end
  end

  register_engine '.es6', Babel::Template
end
