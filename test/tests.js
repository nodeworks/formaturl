/*!
 * jQuery Format URL Test Suite
 * https://github.com/invetek/formaturl
 * 
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the LGPL Version 3 license.
 * 
 * Plugin is forked from Rob Lee <http://www.spartansystems.co>
 */

/*
 *  Standard jQuery plugin tests
 * 
 */
module("Standard jQuery plugin tests");
test("is chainable", function(){
    expect(1);
 
    ok($('#qunit-fixture').formatUrl() instanceof jQuery);  

});

/*
 *  Plugin specific tests
 * 
 */
module("Plugin specific tests");
test("trigger focus on empty input", function(){
    expect(1);
	
	var $input = createInputFixture();
    activatePlugin();
	
	$input.focus();	
	equal($input.val(), 'http://', 'Input doesn\'t contain http://');

});

test("trigger blur after focus on empty input", function(){
    expect(1);
	
	var $input = createInputFixture();
    activatePlugin()	
	
	$input.focus();	
	$input.blur();
	equal($input.val(), '', 'Input should be empty');

});

test("trigger blur after entering www-address in input", function(){
    expect(1);
	
	var $input = createInputFixture();
    activatePlugin()
	
	$input.focus();
	$input.val('www.github.com');	
	$input.blur();
	equal($input.val(), 'http://www.github.com', 'Input should contain http:// + entered address');

});

test("trigger blur after entering http:// + www-address in input", function(){
    expect(1);
	
	var $input = createInputFixture();
    activatePlugin()
	
	$input.focus();
	$input.val('http://www.github.com');	
	$input.blur();
	equal($input.val(), 'http://www.github.com', 'Input should contain http:// + entered address');

});


test("setting protocol via options", function(){
	expect(1);
	
	var $input = createInputFixture();
    activatePlugin({
		'protocol': 'https://'
	});	
	
	$input.focus();
	$input.val('www.github.com');	
	$input.blur();
	equal($input.val(), 'https://www.github.com', 'Input should contain https:// + entered address');
	

})

test("setting alwaysShow via options", function(){
	expect(1);
	
	var $input = createInputFixture();
    activatePlugin({
		'alwaysShow': true
	});	
	
	$input.focus();
	$input.val('');	
	$input.blur();
	equal($input.val(), 'http://', 'Input should contain https://');
	

})

test("setting protocol and alwaysShow via options", function(){
	expect(1);
	
	var $input = createInputFixture();
    activatePlugin({
		'alwaysShow': true,
		'protocol': 'https://'
	});	
	
	$input.focus();
	$input.val('');	
	$input.blur();
	equal($input.val(), 'https://', 'Input should contain http://');
	

})

test("add input after activating plugin", function(){
	expect(1);
	
    activatePlugin({
		'alwaysShow': true,
		'protocol': 'https://'
	});	
	
	var $input = createInputFixture();
	$input.focus();
	$input.val('www.github.com');	
	$input.blur();
	equal($input.val(), 'https://www.github.com', 'Input should contain https://www.github.com');
	

})

function createInputFixture(){
	var $input = $('<input>');
	$('#qunit-fixture').append($input);	
	return $input;
}


function activatePlugin(options){	
	$('#qunit-fixture input').die();
	$('#qunit-fixture input').formatUrl(options);
}

