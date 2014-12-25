

$(document).ready(function() {
	console.log('hello');
});

var navHeight = $('.navbar-wrapper').outerHeight();
var navWidth = $('.navbar-anim').outerWidth();

$(window).resize(function() {
	navHeight = $('.navbar-wrapper').outerHeight();
	navWidth = $('.navbar-anim').outerWidth();	
});

$(window).scroll(function() {
	if ( 2 * navHeight < $(window).scrollTop() ) {
		$('.navbar-wrapper .navbar-anim').css('background-color', '#222');
		$('.navbar-anim').css('width', '100%');
		$('.navbar').css('margin-bottom', '0');
	} else if (navHeight > $(window).scrollTop() ) {
		$('.navbar-wrapper .navbar-anim').css('background-color', 'transparent');
		$('.navbar-anim').css('width', navWidth + 'px');
		$('.navbar').css('margin-bottom', '10px');
	}
});