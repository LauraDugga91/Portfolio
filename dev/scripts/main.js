$(document).ready(function(){
	$(".burger").on("click tap", function(){
		$(".dropdown-content").toggleClass("burger1");
	});

	$('.portfolioClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#portfolio').offset().top
	    }, 1000);
  	});

  	$('.aboutClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#about').offset().top
	    }, 1000);
  	});
  	$('.skillsClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#skills').offset().top
	    }, 1000);
  	});
  	$('.contactClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#contact').offset().top
	    }, 1000);
  	});


});