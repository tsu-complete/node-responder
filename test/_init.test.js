
/* global expect */
(function ( ) {
    "use strict";

    var server;

    before(function ( done ) {
        console.log("  launch: server\n");
        server = require("child_process")
            .exec("node ./test/__server.js --port 3000");
        global.host = "http://localhost:3000";
        server.stdout.on("data", function ( data ) {
            if (~data.indexOf("listening")) {
                done();
            }
        });
    });

    after(function ( ) {
        console.log("  clean: server");
        server.kill();
    });

    describe("server", function ( ) {
        it("should exist", function ( ) {
            expect(typeof server).to.equal("object");
        });
        /*it("should respond", function ( done ) {
            done = done.bind(null, null);
            ajax(global.host).then(done, done);
        });*/
    });

})();

