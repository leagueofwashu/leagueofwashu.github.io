

$(document).ready(function() {
	console.log('hello');
});

var navHeight = $('.navbar-wrapper').outerHeight();


$(window).scroll(function() {
	if ( 2 * navHeight < $(window).scrollTop() ) {
		$('.navbar').css('padding-bottom', '0');
	} else if (navHeight > $(window).scrollTop() ) {
		$('.navbar').css('padding-bottom', '10px');
	}
});