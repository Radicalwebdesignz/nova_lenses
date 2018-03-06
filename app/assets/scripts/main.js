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

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".primary-navbar--border-bottom").addClass("primary-navbar--navbar-color fixed-top");
            $(".nav-item > a").addClass("primary-navbar--nav-link-color");
        }
        else {
            $(".primary-navbar--border-bottom").removeClass("primary-navbar--navbar-color fixed-top");
            $(".nav-item > a").removeClass("primary-navbar--nav-link-color");
        }
        
    })
});

$(".lazyload").on("load", function() {
    Waypoint.refreshAll();
});


// var waypoint = new Waypoint({
//   element: document.getElementById('products'),
//   handler: function() {
//     $('#products').addClass("reveal-item--is-visible");
//   },
//   offset:"75%"
// });

// var waypoint = new Waypoint({
//   element: document.getElementById('treatments'),
//   handler: function() {
//     $('#treatments').addClass("reveal-item--is-visible");
//   },
//   offset:"75%"
// });

$('.waypoint').each(function() {
    var $el = $(this);
    var waypoint = new Waypoint({
    element: $el,
    handler: function() {
        $el.addClass("reveal-item--is-visible");
    },
    offset:"75%"
    });
});
