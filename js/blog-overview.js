let $slider

function buildSliderConfiguration() {
  let windowWidth = $(window).width()

  if (windowWidth < 768) {
    return {
      controls: false,
      slideWidth: 768,
    }
  } else {
    return {
      slideWidth: 1400
    }
  }
}

function configureSlider() {
  let config = buildSliderConfiguration()
  
  if ($slider && $slider.reloadSlider) {
    // If the slider has already been initialized, reload it.
    $slider.reloadSlider(config)
  } else {
    // Otherwise, initialize the slider.
    $slider = $('.bxslider').bxSlider(config)
  }
}

// Configure the slider every time its size changes.
$(window).on("orientationchange resize", configureSlider)
// Configure the slider once on page load.
configureSlider()

// Blog Overview Filter open and close
let blogBtnsWrapperDOM = document.querySelector('.blog-overview-btns')
let blogBtnsDOM = document.getElementsByClassName('filter-btn');

[...blogBtnsDOM].forEach(btn => btn.addEventListener('click', filterOptionChose))

function filterOptionChose(e) {
  [...blogBtnsDOM].forEach(el => {
    el.classList.remove('disactive-filter-btn')
    el.classList.remove('active-filter-btn')
    el.classList.add(`${e.target !== el ? 'disactive-filter-btn' : 'active-filter-btn'}`)
  })
}

function onFilterOpen() {
  document.body.style.top = `-${window.scrollY}px`
  document.body.style.position = 'fixed'
  blogBtnsWrapperDOM.classList.add('blog-btns-active')
}

function filterSubmit() {
  filterClose()
  // TODO: actions to submit filter
}

function filterClose() {
  [...blogBtnsDOM].forEach(el => el.classList.remove('disactive-filter-btn'))
  fixScrollPosition()
  blogBtnsWrapperDOM.classList.remove('blog-btns-active')
}

function fixScrollPosition() {
  document.body.style.position = ''
  const scrollY = document.body.style.top
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}