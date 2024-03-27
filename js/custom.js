
(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
  });

  // NAVBAR
  $(".navbar").headroom();

  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  $('.slick-slideshow').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: true,
    dots: true,
  });

  $('.slick-testimonial').slick({
    arrows: false,
    dots: true,
  });

})(window.jQuery);


// let toggle = document.getElementById("mytoggle")

// toggle.addEventListener('click', () => {
//   document.body.classList.toggle("dark-mode")
// })

const isNewBootcamp = true; // Replace with your logic
const navLink = document.querySelector('.nav-link[href="bootcamp.html"]'); // Get the Bootcamp link

if (isNewBootcamp) {
  const badgeSpan = document.createElement('span');
  badgeSpan.classList.add('new-badge');
  badgeSpan.textContent = '';
  navLink.insertBefore(badgeSpan, navLink.firstChild); // Insert "New" badge before Bootcamp text
}