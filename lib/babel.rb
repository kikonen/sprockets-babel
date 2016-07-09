require 'sprockets/babel/railtie'

module Babel
  def self.options
    @options ||= {}
    yield @options if block_given?
    @options
  end

  def self.gem_root_dir
    @gem_root_dir ||= File.expand_path('../..', __FILE__)
  end
end
