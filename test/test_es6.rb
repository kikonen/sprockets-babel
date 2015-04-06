require 'minitest/autorun'
require 'sprockets'
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
    es6 = File.read('test/fixtures/math.js.es6')
    template = Sprockets::Babel::Template.new('math.js.es6', 1, {
      modules: 'ignore',
      sourceMaps: false
    }) { es6 }
    assert_equal <<-JS.chomp, template.render(Scope.new).strip
"use strict";

var square = function square(n) {
  return n * n;
};
    JS
  end
end
