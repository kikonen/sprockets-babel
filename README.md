# Sprockets::Babel

This gem merges work from [Sprockets Traceur](https://github.com/gunpowderlabs/sprockets-traceur)
and [Sprockets ES6](https://github.com/josh/sprockets-es6) to create a version that uses Babel as
the ES6 transpiler in a Sprockets 2.x environment.

This is intended as a temporary solution until Sprockets 2.x can be upgraded.

## Background

I created this gem for the following reasons:

* I need Babel for IE 8 support, but
  [Middleman](https://github.com/middleman/middleman-sprockets/issues/77)
  does not yet support Sprockets 3, which [sprockets-es6](https://github.com/josh/sprockets-es6)
  uses.
* Babel does not support [inline module formatting](https://github.com/babel/babel/issues/495),
  which I need and therefore implement myself in this gem using some string replacement hacks.

## Use

This gem is meant to be a drop-in replacement for
[Sprockets Traceur](https://github.com/gunpowderlabs/sprockets-traceur). So, just include it in your
`Gemfile` and profit.

## Configuration

```
require 'babel'
::Babel.options do |o|
  o[:optionKey] = 'option value'
end
```

See [Babel Options](https://babeljs.io/docs/usage/options/) for a list of available options.

## Demonstration

See the [sprockets-babel-demo](https://github.com/70mainstreet/sprockets-babel-demo) project for a
demonstration of how this gem can be used in a Middleman project.

## Caveats

Because the inline module formatter is done using some string replacement hacks, generated source
maps do not appear to work.
