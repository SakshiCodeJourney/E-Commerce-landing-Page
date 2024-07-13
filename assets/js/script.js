// <!-- first slider -->
$('.book-slider').slick({
dots:true,
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1400,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
}
},
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 2,
slidesToScroll: 1
}
},
{
breakpoint: 482,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
});
// <!-- first slider end -->

// <!--second slider-->
$('.blog-wrapper').slick({
infinite: true,
slidesToShow: 3,
dots:true,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
}
},
{
breakpoint: 992,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
}
},
{
breakpoint: 768,
settings: {
slidesToShow: 2,
slidesToScroll: 1
}
},
{
breakpoint: 482,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
});
// <!--second slider end-->


// <!--third slider-->
$('.testimonial-slider-inner').slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
dots:true,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
}
},
{
breakpoint: 992,
settings: {
slidesToShow: 2,
slidesToScroll: 1,
infinite: true,
}
},
{
breakpoint: 767,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
},
{
breakpoint: 482,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
});
// <!--third slider end-->

// <!-- hamburger menu -->

	$(document).ready(function(){
	$('#icon').click(function(){
		$('.header-menu').toggleClass('show');
	});
});

// <!-- hamburger menu end -->

// <!-- tabing -->
$(document).ready(function(){
	$('ul.author-tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.author-tabs li').removeClass('current');
		$('.tabcontent').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
// <!-- tabing end -->

// <!-- footer toggle accordian -->
$(document).ready(function() {
  $(".footer-detail > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".st-content").slideUp(200);
      $(".footer-detail > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".footer-detail > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".footer-detail > a").removeClass("active");
      $(this).addClass("active");
      $(".st-content").slideUp(200);
      $(this)
        .siblings(".st-content")
        .slideDown(200);
    }
  });
});

// <!-- footer toggle accordian end-->


