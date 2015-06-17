
node-responder [![Build Status](https://travis-ci.org/tsu-complete/node-responder.svg?branch=master)](https://travis-ci.org/tsu-complete/node-responder) [![Dependency Status](https://david-dm.org/tsu-complete/node-responder.svg)](https://david-dm.org/tsu-complete/node-responder) [![Documentation Coverage](http://inch-ci.org/github/tsu-complete/node-responder.svg?branch=master)](http://inch-ci.org/github/tsu-complete/node-responder?branch=master)
===

> Easy express server

License
---

[![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-1.png)](http://www.wtfpl.net)

Usage
---

```js

var responder = require("responder")

responder.api({
    '/': {
        type: responder.METHOD_GET,
        responder: function ( req, res ) {
            responder.LANG_JSON(req, res)(responder.api());
        }
    }
});

responder.debug();
responder.listen();

```

Linting
---

Linted with jshint

```sh
$ npm run lint
```

Testing
---

Tested with mocha

```sh
$ npm test
```

Documentation
---

Documented with jsdoc

```sh
$ npm run docs
```

