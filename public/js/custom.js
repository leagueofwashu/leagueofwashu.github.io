
console.log('hello');

var off = $('.navbar-wrapper').outerHeight();

$(window).scroll(function() {
	console.log($('.navbar-wrapper').offset().top);
	if ( 2 * off < $(window).scrollTop() ) {
		$('.navbar-wrapper').css('position', 'fixed');
		$('.navbar-wrapper').css('width', '100%');
		$('.navbar-wrapper').css('background-color', '#222');
		$('.navbar').css('margin-bottom', '0');
	} else if (off > $(window).scrollTop() ) {
		$('.navbar-wrapper').css('position', 'absolute');
		$('.navbar-wrapper').css('width', 'auto');
		$('.navbar-wrapper').css('background-color', 'transparent');
		$('.navbar').css('margin-bottom', '20px');
	}
});