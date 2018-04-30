var WonderpushNativescriptSdk = require("nativescript-wonderpush-nativescript-sdk").WonderpushNativescriptSdk;
var wonderpushNativescriptSdk = new WonderpushNativescriptSdk();

describe("greet function", function() {
    it("exists", function() {
        expect(wonderpushNativescriptSdk.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(wonderpushNativescriptSdk.greet()).toEqual("Hello, NS");
    });
});