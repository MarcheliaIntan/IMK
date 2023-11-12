$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  });

  var originalNavbarColor = $('.navbar').css('background-color');

  $('.XD1, .XD2, .XD3, .XD4, .XD5, .XD6, .full-width-dropdown').hover(
    function () {
      $('.navbar').css('background-color', 'transparent');
    },
    function () {
      $('.navbar').css('background-color', originalNavbarColor);
    }
  );

  $('.nav-item').hover(
    function () {
      $(this).find('.full-width-dropdown').addClass('animating').slideDown(300);
    },
    function () {
      var submenu = $(this).find('.full-width-dropdown');
      submenu.removeClass('animating');
      setTimeout(function () {
        submenu.slideUp(300);
      }, 300);
    }
  );

  $('.XD1, .XD2, .XD3, .XD4, .XD5, .XD6').hover(
    function () {
      $(this).siblings('.nav-item').css('z-index', 2);
    },
    function () {
      $(this).siblings('.nav-item').css('z-index', 1);
    }
  );
});

function showOverlay() {
  document.getElementById('overlay').style.display = 'block';
}

function hideOverlay() {
  document.getElementById('overlay').style.display = 'none';
}

function setupXdItemEvents(xdItemClass) {
  var xdItem = document.querySelector('.' + xdItemClass);
  var submenu = xdItem.querySelector('.full-width-dropdown');

  xdItem.addEventListener('mouseenter', function () {
    showOverlay();
  });

  xdItem.addEventListener('mouseleave', function () {
    hideOverlay();
  });

  submenu.addEventListener('mouseenter', function () {
    showOverlay();
  });

  submenu.addEventListener('mouseleave', function () {
    hideOverlay();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  setupXdItemEvents('XD1');
  setupXdItemEvents('XD2');
  setupXdItemEvents('XD3');
  setupXdItemEvents('XD4');
  setupXdItemEvents('XD5');
  setupXdItemEvents('XD6');
});
