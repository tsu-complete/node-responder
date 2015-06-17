

(function ( ) {
    "use strict";

    /** @namespace responder */

    var express, app;

    express = require("express");
    app = express();

    app.use(require("cors")());

    /**
     * Ask the server to begin listening
     * @memberof responder
     * @function listen
     * @static
     * @param {Number} [port=process.env.PORT/3000] where to listen
     * @return {Promise} fulfilled with server or error
     */
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

