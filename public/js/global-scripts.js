// Navbar animation on scroll
$("#mainNav").affix({
	offset: {
		top: 100
	}
});

// Smooth scroll
$(function() {
  $("a[href*=\"#\"]:not([href=\"#\"])").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) +']');
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Animate on scroll
function scrollAnimation(element, animation, delay) {
  var $element = $(element);
  $element.css("opacity", 0);
  $element.waypoint(function() {
    if (typeof(delay) == "undefined") {
      $element.addClass("animated " + animation);
      $element.addClass("opacity-fix");
    } else {
      setTimeout(function() {
        $element.addClass("animated " + animation);
        $element.addClass("opacity-fix");
      }, delay);
    }
  }, { offset: "80%"});
}