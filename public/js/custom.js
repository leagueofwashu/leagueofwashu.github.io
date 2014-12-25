

$(document).ready(function() {
	console.log('hello');
});


$(window).scroll(function() {
	if ( $(window).scrollTop() > 10 ) {
		$('.navbar').css('padding-bottom', '0');
		$('.navbar').css('padding-top', '0');
	} else {
		$('.navbar').css('padding-bottom', '7px');
		$('.navbar').css('padding-top', '3px');
	}
});