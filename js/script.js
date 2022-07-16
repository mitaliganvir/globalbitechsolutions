/* ================================
            Preloader
=================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ================================
            Team
=================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 600,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            }
        }
    });
});

/* ================================
            REsponsive Tabs
=================================*/
$(function () {
    $("#services-tabs").responsiveTabs({

    });
});

/* ===========================================
            Magnifier
==============================================*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/* ================================
            Testimonial slider
=================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ================================
            Google Map
=================================*/
$(window).on('load', function () {
    /* Map Variables */
    var addressString = '133, Abhyankar Nagar, Nagpur-440010, INDIA';
    var myLatlng = {
        lat: 21.125830,
        lng: 79.057420
    };

    /* 1. REnder Google Map */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click to see Address"
    });

    var infowindow = new google.maps.Infowindow({
        content: addressString

    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
});

/* ================================
            Navigation
=================================*/
/**/
$(function () {

    showHideNav();

    $(window).scroll(function () {

        showHideNav();

    });

    function showHideNav() {

        if ($(window).scrollTop() > 100) {

            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            /*show back to top button*/
            $("#back-to-top").fadeIn();

        } else {

            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo-white.png");
            /*hide back to top button*/
            $("#back-to-top").fadeOut();
        }
    }
});

/*Smooth scrolling*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get section id
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1000, "easeInOutExpo");
    });
});

/* ================================
            animation
=================================*/

/*animate on scrolling*/
$(function () {
    new WOW().init();
});

