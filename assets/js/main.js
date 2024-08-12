(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(4000).slideUp('slow');
    });

  })(window.jQuery);

const annonce = new Typed('.annonce-message', {
  strings: ["Plus qu'un Développeur", "Freelancer",],
  loop: true,
  typeSpeed: 24,
  backSpeed: 24,
  backDelay: 500,
})

const spinner = new mojs.Shape({
  parent:           '#preloader',
  shape:            'circle',
  stroke:           '#540162',
  strokeDasharray:  '125, 125',
  strokeDashoffset: {'0': '-125'},
  strokeWidth:      4,
  fill:             'none',
  left:             '50%',
  top:              '50%',
  rotate:            {'-90': '270'},
  radius:           140,
  isShowStart:      true,
  duration:         2000,
  easing:           'back.in',
})
.then({
  rotate:            {'-90': '270'},
  strokeDashoffset: {'-125': '-250'},
  duration:         3000,
  easing:           'cubic.out',
});

spinner.play();

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        let navbar_height;
        let navbar = document.getElementById('navbar');
        let scrollNavbar = document.getElementById('scroll-spy-navbar');
        if (window.scrollY > 50)
        {
            navbar.classList.add('fixed-top');
            navbar.classList.add('shadow');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            navbar.style.backgroundColor = '#F6F4F1FF';
        }
        else
        {
            navbar.classList.remove('fixed-top');
            navbar.classList.remove('shadow');
            document.body.style.paddingTop = '0';
            navbar.style.backgroundColor = '#F6F4F1C1';
        }
    });
});