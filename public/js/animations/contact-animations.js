$(document).ready(function() {
	scrollAnimation("#get-in-touch", "fadeIn");
	scrollAnimation("#contact-info", "fadeInLeft", 500);
	scrollAnimation("#map", "fadeInRight", 500);
  scrollAnimation("#get-in-touch-scroll", "fadeInUp", 1500);
  scrollAnimation("#connect-header", "fadeIn");
  scrollAnimation("#connect-facebook", "fadeInUp");
  scrollAnimation("#connect-twitter", "fadeInUp", 100);
  scrollAnimation("#connect-instagram", "fadeInUp", 200);
  scrollAnimation("#connect-google-plus", "fadeInUp", 300);
  scrollAnimation("#connect-pinterest", "fadeInUp", 400);
  scrollAnimation("#connect-scroll", "fadeInUp", 1200);
  scrollAnimation("#form-well", "flipInX", 500);
});

//material contact form animation
$('.contact-form').find('.form-control').each(function() {
  var targetItem = $(this).parent();
  if ($(this).val()) {
    $(targetItem).find('label').css({
      'top': '10px',
      'fontSize': '14px'
    });
  }
})
$('.contact-form').find('.form-control').focus(function() {
  $(this).parent('.input-block').addClass('focus');
  $(this).parent().find('label').animate({
    'top': '10px',
    'fontSize': '14px'
  }, 300);
})
$('.contact-form').find('.form-control').blur(function() {
  if ($(this).val().length == 0) {
    $(this).parent('.input-block').removeClass('focus');
    $(this).parent().find('label').animate({
      'top': '25px',
      'fontSize': '18px'
    }, 300);
  }
})
