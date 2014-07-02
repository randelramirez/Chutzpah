var chutzpah;
(function (chutzpah) {
    (function (demo) {
        (function (external) {
            var Foo = (function () {
                function Foo() {
                }
                Foo.prototype.helloWorld = function () {
                    alert("Hello World");
                };
                return Foo;
            })();
            external.Foo = Foo;
        })(demo.external || (demo.external = {}));
        var external = demo.external;
    })(chutzpah.demo || (chutzpah.demo = {}));
    var demo = chutzpah.demo;
})(chutzpah || (chutzpah = {}));
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
test("sample test 123", function () {
    var gen = new chutzpah.demo.main.App();
    gen.callHelloWorld();
    gen.callMe();
    var message = jQuery("#foo").html();
    alert(message);

    equal(1, 1);
});
//# sourceMappingURL=test.js.map
