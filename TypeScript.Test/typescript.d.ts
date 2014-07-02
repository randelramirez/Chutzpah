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
declare module chutzpah.demo.main {
    class Bar {
        public callHelloWorld(): void;
        public callMe(): void;
    }
}
