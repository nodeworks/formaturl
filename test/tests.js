

/*
 *  Standard jQuery plugin tests
 * 
 */
module("Standard jQuery plugin tests");
test("return value", function(){
    expect(1);
 
    ok($('#qunit-fixture').formatUrl() instanceof jQuery);  

});

/*
 *  Plugin specific tests
 * 
 */
module("Plugin specific tests");
