/// <reference path="qunit.d.ts" />
/// <reference path="jquery.d.ts" />
declare module chutzpah.demo.external {
    class Foo {
        public helloWorld(): void;
    }
}
declare module chutzpah.demo.main {
    class App {
        public callHelloWorld(): void;
        public callMe(): void;
    }
}
