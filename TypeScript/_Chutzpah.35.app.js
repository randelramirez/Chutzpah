/// <reference path="foo.ts" />
var chutzpah;
(function (chutzpah) {
    (function (demo) {
        (function (main) {
            var App = (function () {
                function App() {
                }
                App.prototype.callHelloWorld = function () {
                    var hellower = new chutzpah.demo.external.Foo();
                    hellower.helloWorld();
                };

                App.prototype.callMe = function () {
                    alert("called");
                };
                return App;
            })();
            main.App = App;
        })(demo.main || (demo.main = {}));
        var main = demo.main;
    })(chutzpah.demo || (chutzpah.demo = {}));
    var demo = chutzpah.demo;
})(chutzpah || (chutzpah = {}));
