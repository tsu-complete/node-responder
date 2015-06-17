
(function ( ) {
    "use strict";

    var argv, responder;

    argv = require("minimist")(process.argv);
    // expecting --port

    responder = require("..");

    responder.listen(argv.port || 3000).then(function ( ) {
        console.log("listening");
    });

})();

