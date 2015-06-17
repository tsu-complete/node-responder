
(function ( ) {
    "use strict";

    global.window = global;

    global.chai = require("chai");

    global.expect = global.chai.expect;
    global.assert = global.chai.assert;

    global.XMLHttpRequest = require("xhr2");
    global.ajax = require("js-ajax");

})( );

