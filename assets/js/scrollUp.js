$(document).ready(function () {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        $('.scrollUp').removeClass('d-none')
      } else {
        $('.scrollUp').addClass('d-none')
      }
    });
  });