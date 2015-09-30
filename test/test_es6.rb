require 'minitest/autorun'
require 'sprockets'
require 'sprockets/babel'
require 'babel'

class Environment
  def paths
    []
  end
end

class Scope
  def environment
    Environment.new
  end
end

class TestES6 < MiniTest::Test
  def test_transform_arrow_function
    ctx = TestES6.create_js_context TestES6.compile_js_source('test/fixtures/math.js.es6')
    square = ctx[:square]
    assert_equal square.call(2), 4
  end

  def test_transform_large_file
    ctx = TestES6.create_js_context TestES6.compile_js_source('test/fixtures/Regions.js.es6')
    regions = ctx[:Regions]
    assert_equal regions.keys.length, 103
    assert_equal regions['CA'][7]['name'], 'Ontario'
  end

  def test_transform_empty_file
    compiled = TestES6.compile_js_source 'test/fixtures/empty.js.es6', 'inline'
    ctx = TestES6.create_js_context compiled
    assert !ctx['$__empty__'].nil?
  end

  def test_transform_empty_file2
    compiled = TestES6.compile_js_source 'test/fixtures/empty2.js.es6', 'inline'
    ctx = TestES6.create_js_context compiled
    assert !ctx['$__empty2__'].nil?
  end

  def self.create_js_context(code)
    ctx = V8::Context.new
    ctx.eval(code)
    ctx
  end

  def self.compile_js_source(path, modules = 'ignore')
    es6_source = File.read(path)
    Babel.options[:modules] = modules

    template = Sprockets::Babel::Template.new(File.basename(path), 1) { es6_source }
    template.render(Scope.new)
  end
end
