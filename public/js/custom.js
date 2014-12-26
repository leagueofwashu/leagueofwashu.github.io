

$(document).ready(function() {
	console.log('hello');
	$('.navbar').css('min-height', '40px');
});


$(window).scroll(function() {
	if ( $(window).scrollTop() > 10 ) {
		$('.navbar-brand').css('height', 'auto');
		$('.navbar-brand').css('padding', '10px');
		$('.navbar-nav>li>a').css('padding-top', '10px');
		$('.navbar-nav>li>a').css('padding-bottom', '10px');
	} else {
		$('.navbar-brand').css('height', '40px');
		$('.navbar-brand').css('padding', '15px');
		$('.navbar-nav>li>a').css('padding-top', '15px');
		$('.navbar-nav>li>a').css('padding-bottom', '15px');
	}
});