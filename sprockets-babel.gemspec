# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'sprockets/babel/version'

Gem::Specification.new do |spec|
  spec.name          = 'sprockets-babel'
  spec.version       = Sprockets::Babel::VERSION
  spec.authors       = ['Brad Chen']
  spec.email         = ['brad.chen@70ms.com']
  spec.summary       = %q{Sprockets 2.x plugin for BabelJS.}
  spec.description   = %q{Transpile ES6 files with BabelJS.}
  spec.homepage      = 'https://github.com/70mainstreet/sprockets-babel'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency 'sprockets', '~> 2'
  spec.add_dependency 'babel-transpiler'

  spec.add_development_dependency 'rake'
  spec.add_development_dependency 'minitest'
end
