

$(document).ready(function() {
	console.log('hello');
	$('.navbar').css('min-height', '40px');
});


$(window).scroll(function() {
	if ( $(window).scrollTop() > 10 ) {
		$('.navbar').css('padding-bottom', '0');
		$('.navbar').css('padding-top', '0');
		$('.navbar-brand').css('height', 'auto');
		$('.navbar-brand').css('padding', '10px');
		$('.navbar-nav>li>a').css('padding-top', '5px');
		$('.navbar-nav>li>a').css('padding-bottom', '5px');
	} else {
		$('.navbar').css('padding-bottom', '7px');
		$('.navbar').css('padding-top', '7px');
		$('.navbar-brand').css('height', '50px');
		$('.navbar-brand').css('padding', '15px');
		$('.navbar-nav>li>a').css('padding-top', '10px');
		$('.navbar-nav>li>a').css('padding-bottom', '10px');
	}
});