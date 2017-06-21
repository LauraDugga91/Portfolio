

$(document).ready(function(){

//smooth scroll

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
  	$('.topClick').on('click', function() {
	    $('html, body').animate({
	        scrollTop: $('#nav').offset().top
	    }, 1000);
  	});

//nav bar 

// $(window).scroll( function() {
// 		if ($(window).scrollTop() > 150) {
// 			$('#nav').fadeIn(400);
// 		} else {
// 			$('#nav').fadeOut(400);
// 		}
				
// 	});


});