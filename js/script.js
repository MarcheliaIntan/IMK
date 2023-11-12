$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000, // Adjust as needed
        autoplayHoverPause: true
    });
});

$(document).ready(function() {
  $('.nav-item').hover(
    function() {
      $(this).find('.full-width-dropdown').addClass('animating').slideDown(300);
    },
    function() {
      var submenu = $(this).find('.full-width-dropdown');
      submenu.removeClass('animating');
      setTimeout(function() {
        submenu.slideUp(300);
      }, 300);
    }
  );
});