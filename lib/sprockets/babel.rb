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
      result = remove_use_strict(code).sub(/\Adefine\((.+?), function \(([^)]+)\) \{\n/m) do
        raw_import_names = Regexp.last_match[1]
        raw_import_vars = Regexp.last_match[2]
        import_names = raw_import_names.gsub(/['"\[\]]/, '').split(', ')
        import_vars = raw_import_vars.split(', ')
        import_statements = ''
        import_names.each_with_index { |item, i|
          next if i == 0
          next if item == 'exports' || item == 'module'
          import_module_id = escape_module_id(resolve_relative_module_id(options[:moduleId], item))
          import_statements += 'var ' + import_vars[i - 1] + ' = ' + import_module_id + ';'
        }
        "var exports = {}, module = {};\n" + import_statements
      end

      # deal with trailing stuff (such as source maps)
      index = find_closing_brace result
      stripped = result[0..index - 4] # - 4 to remove the closing });
      trailing_text = result[index..-1]

      'var ' + escape_module_id(options[:moduleId]) + " = (function() {\n" +
        "'use strict';\n" +
        stripped + "\n" +
        'return (typeof module.exports === \'undefined\') ? exports : module.exports;' +
        "})();\n" + trailing_text + "\n"
    end

    # Detect the closing });
    def self.find_closing_brace(code)
      curr = code.length - 1
      last_line_break = curr
      line_comment = false
      block_comment = false
      while curr > 0
        if code[curr] == "\n"
          if line_comment
            last_line_break = curr
            line_comment = false
          elsif !block_comment
            # first line without a comment found
            return last_line_break
          end
        end

        if code[curr - 1, 2] == '//'
          line_comment = true
        end
        if code[curr - 1, 2] == '*/'
          block_comment = true
        end
        if code[curr - 1, 2] == '/*'
          line_comment = true
          block_comment = false
          last_line_break = curr - 2
        end
        curr -= 1
      end
      last_line_break
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

    def self.remove_use_strict(code)
      code.gsub(/['"]use strict['"];\n/m, '')
    end

    def self.escape_module_id(module_id)
      '$__' + ERB::Util.url_encode(module_id.gsub(/^\.\//, '')).gsub(/%|-/, '') + '__'
    end
  end

  register_engine '.es6', Babel::Template
end
