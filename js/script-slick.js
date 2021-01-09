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

// Slider for mobile Blog-detail page
let slickSliderActive = false
function checkSlider() {
  if ($(window).width() < 768) {
    if (slickSliderActive == false) {
      $('.center').slick({
        dots: true,
        arrows: false,
        centerMode: true,
        variableWidth: true
      })
      slickSliderActive = true
    }
  }
  else {
    if (slickSliderActive == true) {
      $('.center').slick('unslick')
      slickSliderActive = false
    }
  }
};

checkSlider()
$(window).on('resize', checkSlider)