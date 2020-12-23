$(document).ready(
  function () {
    $('.multiple-items').slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding: '100px',
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          slidesToScroll: 1
        },
        breakpoint: 1168,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          slidesToScroll: 1
        }
      }]
    })
  })
