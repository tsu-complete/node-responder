
/* global expect */
(function () {
    "use strict";

    describe("environment", function ( ) {
        it("should have global", function ( ) {
            return expect(typeof global).to.equal("object");
        });
        it("should have chai", function ( ) {
            return expect(typeof chai).to.equal("object");
        });
        it("should have assert", function ( ) {
            return expect(typeof assert).to.equal("function");
        });
        it("should have expect", function ( ) {
            return expect(typeof expect).to.equal("function");
        });
        it("should have XMLHttpRequest", function ( ) {
            return expect(typeof XMLHttpRequest).to.equal("function");
        });
        it("should have ajax", function ( ) {
            return expect(typeof ajax).to.equal("function");
        });
    });

})();

