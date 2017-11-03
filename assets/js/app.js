// $(window).on("scroll touchmove", function () {
//   $('.navigation-wrapper.sidenav-dropdown.header-style-7').toggleClass('smaller', $(document).scrollTop() > 0);
// });

console.log(" Developed by David Ricardo \n Website: https://davidrica.com \n Email: davidlikaldo@gmail.com");


/* Image gallery */
$('.img-gallery:first').addClass('active');
$(".img-gallery").click(function(){
	var mainImage = this.src;
	$('#main-image').attr('src', mainImage);
	$('.img-gallery').removeClass('active');
	$(this).addClass('active');
}); 

// $('.img-gallery-color:first').addClass('active');
// $(".img-gallery-color").click(function(){
// 	var mainImage = this.src;
// 	$('#main-image').attr('src', mainImage);
// 	$('.img-gallery-color').removeClass('active');
// 	$(this).addClass('active');
// }); 

$('.box-3').click(function(){
	$('.box-3').removeClass('active');
	$(this).addClass('active');
});

$('.box-4').click(function(){
	$('.box-4').removeClass('active');
	$(this).addClass('active');
});