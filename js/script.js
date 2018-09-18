
$(document).ready(function() {
	var slider = new SliderElement();
	
	$(".next").click(function () {
		slider.nextSlide();
	});
	
	$(".prev").click(function() {
		slider.prevSlide();
	});
	
	$("#download").click(function() {
		slider.screenshot();
	});
});
