module Babel
  def self.options
    @options ||= {}
    yield @options if block_given?
    @options
  end
end