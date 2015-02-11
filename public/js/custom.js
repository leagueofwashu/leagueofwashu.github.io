
var smallNav = false;

$(document).ready(function() {
	console.log('hello');
	$('.navbar').css('min-height', '36px');
	$('body').css('padding-top', '40px');
	$('.dd-content').css('display', 'none');
	$('.signup-hide').css('display', 'none');

	if ($(window).scrollTop() > 30 && $('.navbar-toggle').css('display') === 'none'){
		shrinkNav();
	}
});

$(window).scroll(function() {
	if ( $(window).scrollTop() > 30 && $('.navbar-toggle').css('display') === 'none' && !smallNav) {
		shrinkNav();
	} else if ($(window).scrollTop() <= 30 && $('.navbar-toggle').css('display') != 'none' && smallNav){
		expandNav();
	}
});

function shrinkNav(){
	$('.navbar-wrapper').css('opacity', '0.8');
	$('.navbar-brand').css('height', 'auto');
	$('.navbar-brand').css('padding-top', '8px');
	$('.navbar-brand').css('padding-bottom', '8px');
	$('.navbar-nav>li>a').css('padding-top', '8px');
	$('.navbar-nav>li>a').css('padding-bottom', '8px');
	smallNav = true;
}

function expandNav(){
	$('.navbar-wrapper').css('opacity', '1');
	$('.navbar-brand').css('height', '40px');
	$('.navbar-brand').css('padding-top', '15px');
	$('.navbar-brand').css('padding-bottom', '15px');
	$('.navbar-nav>li>a').css('padding-top', '15px');
	$('.navbar-nav>li>a').css('padding-bottom', '15px');
	smallNav = false;
}

$('.signup-link').on('click', function() {


	$('#form-' + $(this).attr('id')).toggle();
	return false;
});

$('.dd-header').on('click', function() {
	$(this).toggleClass('dd-active');

	if ( $(this).hasClass('dd-active')) {
		$(this).parent().find('.dd-content').slideDown(175);
	} else {
		$(this).parent().find('.dd-content').slideUp(175);
	}
});
