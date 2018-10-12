$(document).ready(function() {
	
	$(".next").on("click", function() {
		var currentImage = $(".img.curry");
		var currentImageIndex = $(".img.curry").index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $(".img").eq(nextImageIndex);

		currentImage.fadeOut(900);
		currentImage.removeClass('curry');

		if(nextImageIndex == ($('.img:last').index()+1) ) {
			$(".img").eq(0).fadeIn(900);
			$(".img").eq(0).addClass('curry');
		}else {
			nextImage.fadeIn(900);
			nextImage.addClass('curry');
		}
	});

	$(".prev").on("click", function() {
		var currentImage = $(".img.curry");
		var currentImageIndex = $(".img.curry").index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $(".img").eq(prevImageIndex);


		currentImage.fadeOut(900);
		currentImage.removeClass('curry');
		prevImage.fadeIn(900);
		prevImage.addClass('curry');
	});

});