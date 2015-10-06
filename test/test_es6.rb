require 'minitest/autorun'
require 'sprockets/babel'

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
    assert_equal 4, square.call(2)
  end

  def test_transform_large_file
    ctx = TestES6.create_js_context TestES6.compile_js_source('test/fixtures/Regions.js.es6')
    regions = ctx[:Regions]
    assert_equal 103, regions.keys.length
    assert_equal 'Ontario', regions['CA'][7]['name']
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

  def test_import_export
    ctx = TestES6.create_js_context <<-JS
      var output = '', print = function(data) { output += data};
    JS
    ctx.eval TestES6.compile_js_source 'test/fixtures/lib/SomeUtils.js.es6', 'inline',
      'lib/SomeUtils'
    ctx.eval TestES6.compile_js_source 'test/fixtures/test-import.js.es6', 'inline'
    assert_equal 'foo', ctx[:output]
  end

  def self.create_js_context(code)
    ctx = V8::Context.new
    ctx.eval(code)
    ctx
  end

  def self.compile_js_source(path, modules = 'ignore', name = '')
    es6_source = File.read(path)
    Babel.options[:modules] = modules

    name = name.empty? ? File.basename(path) : name
    template = Sprockets::Babel::Template.new(name, 1) { es6_source }
    template.render(Scope.new)
  end
end
