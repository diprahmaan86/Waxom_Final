$(function(){

// Counter Part of Data

$('.counter').counterUp({
    delay: 20,
    time: 1000
});

// Sticky Header

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('bg');
    }
    else {
         $('.navbar').removeClass('bg');
    }
}); 

// Banner Slider
    
$('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1500,
    });

    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
  

      ]

// Service Slider

$('.service_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1500,
});

responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]

  $('.venobox').venobox();


});