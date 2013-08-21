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

function createInputFixture(){
	var $input = $('<input>');
	$('#qunit-fixture').append($input);	
	return $input;
}


function activatePlugin(options){	
	$('#qunit-fixture input').die(); // Remove previously attached live event handlers
	$('#qunit-fixture input').formatUrl(options);
}

