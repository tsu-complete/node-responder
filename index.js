

(function ( ) {
    "use strict";

    var _;

    _ = require("underscore");

    /** @namespace responder */

    /**
     * get method constant
     * @memberof responder
     * @member METHOD_GET
     */
    exports.METHOD_GET = "GET";

    /**
     * post method constant
     * @memberof responder
     * @member METHOD_POST
     */
    exports.METHOD_POST = "POST";

    /**
     * put method constant
     * @memberof responder
     * @member METHOD_PUT
     */
    exports.METHOD_PUT = "PUT";

    /**
     * delete method constant
     * @memberof responder
     * @member METHOD_DELETE
     */
    exports.METHOD_DELETE = "DELETE";

    /**
     * all method constant
     * @memberof responder
     * @member METHOD_ALL
     */
    exports.METHOD_ALL = "ALL";

    /**
     * use method constant
     * @memberof responder
     * @member METHOD_USE
     */
    exports.METHOD_USE = "USE";

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

    /**
     * formatter middleware
     * @memberof responder
     * @namespace formatter
     */
    exports.formatter = {
        /**
         * code highlight formatter
         * @memberof sender
         * @function code
         * @param {String} lang language name for syntax
         * @param {String} code stringified code
         * @return {String} formatted code
         */
        code: function ( code, lang ) {
            var formatted =
                // hightlight js import
                "<script src='https://cdnjs.cloudflare.com/ajax/libs/" +
                "highlight.js/8.6/highlight.min.js'></script>" +
                // highlight js initialization
                "<script>hljs.initHighlightingOnLoad();</script>" +
                // default styles
                "<style>" +
                    "body{background-color:#1C2A39;}" +
                    ".hljs{color:#6C7A89;font-size:1.2em}" +
                    ".hljs-attribute{color:#2ECC71}" +
                    ".hljs-string{color:#F39C12}" +
                    ".hljs-number{color:#3498DB}" +
                    ".hljs-literal{color:#9B59B6}" +
                "</style>" +

                // code with lang
                "<pre><code class='" + lang + "'>" + code + "</code></pre>";

            return formatted;
        },
        /**
         * json formatter
         * @memberof sender
         * @function json
         * @param {Object} json js object to format
         * @return {String} formatted json
         */
        json: function ( json ) {
            return exports.formatter.code("json",
                JSON.stringify(json, null, 2));
        }
    };

    /**
     * sender middleware
     * @memberof responder
     * @namespace sender
     */
    exports.sender = {
        /**
         * json sender
         * @memberof sender
         * @function json
         * @param {Object} req request object
         * @param {Object} res response object
         * @return {Function} data callback
         */
        json: function ( req, res ) {
            return _.once(function ( error, data ) {
                if (error) {
                    res.status(500);
                    data = {error: error};
                }

                if (req.query.formatted !== void 0) {
                    res.send(exports.formatter.json(data));
                } else {
                    res.json(data);
                }
            });
        }
    };

})();

