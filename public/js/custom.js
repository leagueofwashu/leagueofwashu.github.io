

$(document).ready(function() {
	console.log('hello');
	$('.navbar').css('min-height', '36px');
});


$(window).scroll(function() {
	if ( $(window).scrollTop() > 10 ) {
		$('.navbar-brand').css('height', 'auto');
		$('.navbar-brand').css('padding-top', '8px');
		$('.navbar-brand').css('padding-bottom', '8px');
		$('.navbar-nav>li>a').css('padding-top', '8px');
		$('.navbar-nav>li>a').css('padding-bottom', '8px');
	} else {
		$('.navbar-brand').css('height', '40px');
		$('.navbar-brand').css('padding-top', '15px');
		$('.navbar-brand').css('padding-bottom', '15px');
		$('.navbar-nav>li>a').css('padding-top', '15px');
		$('.navbar-nav>li>a').css('padding-bottom', '15px');
	}
});