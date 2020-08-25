var portfolio = $("#portfolio");

portfolio.slick({
	arrows: false,
	dots: true,
	speed: 700,
	slidesToShow: 2,
    slidesToScroll: 2,
});

$("#portfolio-arrow-prev").on("click",function(event){
	event.preventDefault();
	
	portfolio.slick('slickPrev');
});

$("#portfolio-arrow-next").on("click",function(event){
	event.preventDefault();
	
	portfolio.slick('slickNext');
});


