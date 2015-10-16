/* Intro Slider */
$(document).ready(function(){
	alert('working');
	$('#slideshow').slick({slidesToShow: 4, autoplay: true, autoplaySpeed: 3000, dots: true});

    $('#slideshow').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      //get the current slide src
      var thisSlide = $('.slick-slide').eq(currentSlide).find('img').attr('src');
      console.log(thisSlide);
      //get the background slide and change background image w/ current slide 
      $('.banner-img').animate({ opacity: 0 }, 'slow', function()
      {
             $(this).css({"background-image":"url('"+thisSlide+"')"}).animate({opacity: 1}, 'slow');
      });
     
    });

    //$('.fancybox').fancybox();

});
