

(function ( ) {
    "use strict";

    var express, app;

    express = require("express");
    app = express();

    app.use(require("cors")());

    exports.listen = function ( port ) {
        port = port || process.env.PORT || 3000;

        return new global.Promise(function ( accept, reject ) {
            var server;

            server = app.listen(port, function ( error ) {
                if (error) {
                    reject(error);
                } else {
                    accept(server);
                }
            });
        });
    };

})();
