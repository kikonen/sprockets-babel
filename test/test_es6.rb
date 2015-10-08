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
    ctx = TestES6.create_test_import_context
    ctx.eval TestES6.compile_js_source 'test/fixtures/test-import.js.es6', 'inline'
    assert_equal 'foobar', ctx[:output]
  end

  def test_relative_import
    ctx = TestES6.create_test_import_context
    ctx.eval TestES6.compile_js_source 'test/fixtures/lib2/test-relative-import.js.es6', 'inline',
      'lib2/test-relative-import'
    assert_equal 'foobar', ctx[:output]
  end

  def test_js_inline_module_loader
    ctx = TestES6.create_inline_module_loader_context
    ctx.eval TestES6.compile_js_source 'test/fixtures/test-import.js.es6', 'inline'
    assert_equal 'foobar', ctx[:output]
  end

  def test_js_inline_module_loader_relative_import
    ctx = TestES6.create_inline_module_loader_context
    ctx.eval TestES6.compile_js_source 'test/fixtures/lib2/test-relative-import.js.es6', 'inline',
            'lib2/test-relative-import'
    assert_equal 'foobar', ctx[:output]
  end

  private

  def self.create_inline_module_loader_context
    inline_module_loader = File.read('lib/sprockets-babel-inline-module-loader.js')
    TestES6.create_test_import_context inline_module_loader, 'amd'
  end

  def self.create_test_import_context(code = nil, module_format = 'inline')
    ctx = TestES6.create_js_context code
    ctx.eval <<-JS
      var output = '', print = function(data) { output += data};
    JS
    ctx.eval TestES6.compile_js_source 'test/fixtures/lib/Imported1.js.es6', module_format,
      'lib/Imported1'
    ctx.eval TestES6.compile_js_source 'test/fixtures/lib/Imported2.js.es6', module_format,
      'lib/Imported2'
    ctx
  end

  def self.create_js_context(code = nil)
    ctx = V8::Context.new
    ctx.eval(code) unless code.nil?
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
