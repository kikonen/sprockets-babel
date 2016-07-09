require "sprockets/railtie"

module Sprockets
  module Babel
    class Railtie < ::Rails::Railtie
      # assets
      initializer 'base' do |app|
        register_asset_paths(app)
      end

      rake_tasks do
        Base.load_tasks
      end

      private

      def register_asset_paths(app)
        base_dirs = [
          'app',
        ]

        asset_dirs = [
          'javascripts',
        ]

        assets = app.config.assets
        base_dirs.each do |base_dir|
          asset_dirs.each do |asset_dir|
            path = "#{::Babel.gem_root_dir}/#{base_dir}/assets/#{asset_dir}"
            if File.exist?(path)
              ::Rails.logger.info "asset_path: #{path}"
              config.assets.paths << path
            end
          end
        end
      end
    end
  end
end
