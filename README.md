# Sprockets::Babel

This gem merges work from [Sprockets Traceur](https://github.com/gunpowderlabs/sprockets-traceur)
and [Sprockets ES6](https://github.com/josh/sprockets-es6) to create a version that uses Babel as
the ES6 transpiler in a Sprockets 2.x environment.

This is intended as a temporary solution until Sprockets 2.x can be upgraded.

## Usage

### Inline
Default module define logic is to use "inline". However, that generates extra boilerplate on every file,
which accumulates to be plenty with lot fo files.

### AMD

Using 'amd' allows to reduce boilerplate, but requires including "define.js" before es6 files in manifest.

config/initializers/babel.rb
```
Babel.options do |opt|
  opt[:modules] = 'amd'
end
```

app/assets/javascripts/application.js
```
//= require sprockets-babel-miniracer/define
```

### SystemJS

Recommended appraoch is to use systemjs instead of AMD. This provides more comprehensive logic for
setting up environment.

config/initializers/babel.rb
```
Babel.options do |opt|
  opt[:modules] = 'system'
end
```

app/assets/javascripts/application.js
```
// NOTE KI assuming that systemjs is included somehow into vendor assets
//= require system.js-0.19.31/system-polyfills.src
//= require system.js-0.19.31/system.src
```

For initialization purposes following utility may be helpfull

app/assets/javascripts/shared/gi.js
```javascript
(function() {
  'use strict';

  /**
   * @return promise to get module
   */
  function importModule(name) {
    return System
      .import(name)
      .catch(function(err) {
        console.error("module not found: " + name);

        console.log(err);
        console.log(err.message);
        console.log(err.stack);

        var err2 = err.originalErr;
        if (err2) {
          console.log(err2);
          console.log(err2.message);
          console.log(err2.stack);
        }

        throw err;
      });
  }

  /**
   * Asynchronouslyl load and init ES6 module via document ready hook
   *
   * @return module load promise
   */
  function initModule(name) {
    return importModule(name).then(function(module) {
      if (module.init) {
        console.debug('INIT: '+ name);
        try {
          module.init();
        } catch (e) {
          console.error("INIT FAILED: " + name);
          console.error(e);
          console.error(e.message);
          console.error(e.stack);

          var e2 = e.originalException;
          if (e2) {
            console.error(e2);
            console.error(e2.message);
            console.error(e2.stack);
          }

          throw e;
        };
      } else {
        console.warn('NO INIT: ' + name);
      }
    });
// .catch(function(err) {
//       console.warn('INIT failed: ' + err.message);
//     });
  }

  window.gi = window.gi || {};

  _.assign(window.gi, {
    importModule: importModule,
    initModule: initModule,
  });
})();
```

app/assets/javascripts/test/module.js
```javascript
$(function() {
  gi.initModule('test/test').then(function() {
    ...
  });
});
```

app/assets/javascripts/test/module.js
```javascript
export function init() {
  ...
}
```

*References*
[SystemJS](https://github.com/systemjs/systemjs)

## Background

NOTE KI

Created to allow support for miniracer, and to fix some minor logic bugs

Original: [sprockets-babel](70mainstreet/sprockets-babel)

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
