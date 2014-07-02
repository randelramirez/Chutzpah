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
