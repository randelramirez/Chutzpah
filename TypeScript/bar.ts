module chutzpah.demo.main {

    export class Bar {

        public callHelloWorld(): void {
            var hellower: chutzpah.demo.external.Foo = new chutzpah.demo.external.Foo();
            hellower.helloWorld();

        }

        public callMe(): void {

            alert("called");
        }
    }
}