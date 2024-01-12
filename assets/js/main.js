(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(4000).slideUp('slow');
    });

  })(window.jQuery);


//Sticky navbar
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        let navbar_height;
        if (window.scrollY > 50) {
            document.getElementById('navbar')
                .classList
                .add('fixed-top');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            document.getElementById('navbar').style.backgroundColor = '#F6F4F1FF';
        } else {
            document.getElementById('navbar')
                .classList
                .remove('fixed-top');
            document.body.style.paddingTop = '0';
            document.getElementById('navbar').style.backgroundColor = '#F6F4F1C1';
        }
    });
});

const carousel = new bootstrap.Carousel('#rssCarousel');