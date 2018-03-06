$(document).ready(function(){
    $(".slider").slick({
    	arrows: false,
      	dots:true,
      	slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function(){
    $(".slider1").slick({
      	slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});

$(function(){
    $(".scroll").click(function(){
        $("html,body").animate({scrollTop:$("body").offset().top},"1000");
        return false
    })
});



