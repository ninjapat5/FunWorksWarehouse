function scrollAnimation(element, animation) {
	var $element = $(element);
	$element.css("opacity", 0);
	$element.waypoint(function() {
		$element.addClass("animated " + animation);
	}, { offset: "70%"});
}

$(document).ready(function(){
	//call scrollAnimation here on the elements to be animated on scroll
});

