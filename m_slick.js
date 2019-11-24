$('.sl').slick({
dots: true,
infinite: false,
speed: 300,
adaptiveHeight: true,
slidesToShow: 4,
autoplay: true,
slidesToScroll: 1,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      autoplay: true,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      autoplay: true,
      slidesToScroll: 1
    }
  }
]
});