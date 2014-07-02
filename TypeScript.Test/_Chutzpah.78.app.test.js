/// <reference path="qunit.d.ts" />
/// <reference path="../typescript/app.ts" />
/// <reference path="jquery.d.ts" />
test("sample test 123", function () {
    // Arrange
    var gen = new chutzpah.demo.main.App();
    gen.callHelloWorld();
    gen.callMe();
    var message = jQuery("#foo").html();
    alert(message);

    // Act
    //var result = gen.generate("Hi");
    // Assert
    equal(1, 1);
});
