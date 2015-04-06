require 'babel/transpiler'
require 'sprockets'
require 'pathname'

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
        ::Babel::Transpiler.transform(data, {
          modules: 'system',
          moduleIds: true,
          moduleId: get_module_name(source_root),
          sourceMaps: 'inline',
          filename: file,
          filenameRelative: get_filename_relative(source_root)
        }.merge(options))['code']
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
  end

  register_engine '.es6', Babel::Template
end
