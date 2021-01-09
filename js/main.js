const menuIcon = document.querySelector('.menu')
const commonComtainer = document.querySelector('.sticky-go-top-wrapper')
const menuArrowUp = document.querySelector('.menu-arrow-up')
const toTopBtn = document.querySelector('.toTop')

function openMenu() {
  if (menuArrowUp) menuArrowUp.style.display = 'none'
  document.documentElement.style.overflowY = 'hidden'
  document.body.classList.add('menu-background')
  document.querySelector('.sticky').style.zIndex = '0'
  menuIcon.classList.add('active-menu')
}

function closeMenu() {
  if (menuArrowUp) menuArrowUp.style.display = 'block'
  document.documentElement.style.overflowY = 'auto'
  document.body.classList.remove('menu-background')
  document.querySelector('.sticky').style.zIndex = '10000'
  menuIcon.classList.remove('active-menu')
}

// Scroll to Top button 
function scrollFunction() {
  if (toTopBtn) toTopBtn.style.display = (toTopBtn && document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none"
}
window.onscroll = function () { scrollFunction() }

function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

// Visual support 
const card = document.querySelectorAll('.virtual-support-flip')
const cardBtn = document.querySelectorAll('.virtural-card-btn')

function flipCard() {
  if (event.target.classList.contains('support-name')) event.target.parentNode.parentNode.classList.toggle('is-flipped')
  if (event.target.classList.contains('close-supporter-img')) event.target.parentNode.parentNode.parentNode.classList.toggle('is-flipped')
}
if (card) [...cardBtn].forEach(el => el.addEventListener('click', flipCard))

// Open the Consultancy Pop-up
const consultancyDOM = document.querySelector('.popup-container')

function openPopUpWindow() {
  document.body.style.top = `-${window.scrollY}px`
  document.documentElement.style.overflowY = 'hidden'
  document.querySelector('.sticky').style.zIndex = '1'
  toTopBtn.style.display = 'none'
  consultancyDOM.classList.add('popup-container-active')
}

function closePopUpWindow() { 
  document.documentElement.style.overflowY = 'auto'
  document.querySelector('.sticky').style.zIndex = '10000'
  toTopBtn.style.display = 'block'
  const scrollY = document.body.style.top
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
  consultancyDOM.classList.remove('popup-container-active')
}

// Slider
let xDown = null
let yDown = null

function showSlides(slidesClass, sliderItemsClass, slideIndex, activeItem, activeBtn) {
  const slides = document.getElementsByClassName(slidesClass)
  const sliderItems = document.getElementsByClassName(sliderItemsClass)

  for (let i = 0; i < slides.length; i++) slides[i].classList.remove(activeItem)

  for (let i = 0; i < sliderItems.length; i++) sliderItems[i].className = sliderItems[i].className.replace(` ${activeBtn}`, '')

  slideIndex = (slideIndex - 1 < slides.length) ? slideIndex - 1 : slides.length - 1
  slides[slideIndex].classList.add(activeItem)
  sliderItems[slideIndex].className += ` ${activeBtn}`
}


function addTouchListener(container, showSlidesArgs) {
  container.addEventListener('touchstart', handleTouchStart, false)
  container.addEventListener('touchmove', handleTouchMove, false)

  function getTouches(evt) {
    return evt.touches ||        // browser API
      evt.originalEvent.touches // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(event)[0]
    xDown = firstTouch.clientX
    yDown = firstTouch.clientY
  }

  function handleTouchMove(evt) {
    const arg = showSlidesArgs
    const elementsNumber = document.querySelectorAll(`.${arg.slidesClass}`).length
    const xUp = evt.touches[0].clientX
    const yUp = evt.touches[0].clientY
    const xDiff = xDown - xUp
    const yDiff = yDown - yUp

    if (!xDown || !yDown) {
      return
    }

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      arg.slideIndex = xDiff > 0 ? arg.slideIndex < elementsNumber
        ? arg.slideIndex + 1 : elementsNumber
        : arg.slideIndex = arg.slideIndex > 1 ? arg.slideIndex - 1 : 1
      showSlides(arg.slidesClass, arg.sliderItemsClass, arg.slideIndex, arg.activeItem, arg.activeBtn)
    }
    xDown = null
    yDown = null
  }
}

// for home page
const slideWrapper = document.querySelector('.slide')
if (slideWrapper) {
  addTouchListener(slideWrapper, {
    slidesClass: 'slide-photos',
    sliderItemsClass: 'slider-item',
    slideIndex: 1,
    activeItem: 'slide-photos-active',
    activeBtn: 'active-slider'
  })
}

const benefitsWrapper = document.querySelector('.benefits')
if (benefitsWrapper) {
  addTouchListener(benefitsWrapper, {
    slidesClass: 'benefits-option',
    sliderItemsClass: 'benefits-slider-item',
    slideIndex: 1,
    activeItem: 'active-benefits-option',
    activeBtn: 'active-benefits-slider'
  })
}

// about-combinvest
const combinvestWrapper = document.querySelector('.combinvest-info-wrapper')
if (combinvestWrapper) {
  addTouchListener(combinvestWrapper, {
    slidesClass: 'combinvest-info',
    sliderItemsClass: 'combinvest-btn',
    slideIndex: 1,
    activeItem: 'active-service-info',
    activeBtn: 'active-info-btn'
  })
}

// for taxes page
const taxesWrapper = document.querySelector('.taxes-wrapper')
if (taxesWrapper) {
  addTouchListener(taxesWrapper, {
    slidesClass: 'taxes-type',
    sliderItemsClass: 'taxes-btn',
    slideIndex: 1,
    activeItem: 'active-service-info',
    activeBtn: 'active-info-btn'
  })
}

// for service-insurance page
const insuranceWrapper = document.querySelector('.insurance-info-wrapper')
if (insuranceWrapper) {
  addTouchListener(insuranceWrapper, {
    slidesClass: 'insurance-info',
    sliderItemsClass: 'insurance-info-btn',
    slideIndex: 1,
    activeItem: 'active-service-info',
    activeBtn: 'active-info-btn'
  })
}

const protectionWrapper = document.querySelector('.protection-info-wrapper')
if (protectionWrapper) {
  addTouchListener(protectionWrapper, {
    slidesClass: 'protection-info',
    sliderItemsClass: 'protection-info-btn',
    slideIndex: 1,
    activeItem: 'active-service-info',
    activeBtn: 'active-info-btn'
  })
}

const carIncurWrapper = document.querySelector('.car-incurance-wrapper')
if (carIncurWrapper) {
  addTouchListener(carIncurWrapper, {
    slidesClass: 'car-insurance',
    sliderItemsClass: 'car-insurance-btn',
    slideIndex: 1,
    activeItem: 'active-service-info',
    activeBtn: 'active-info-btn'
  })
}

const travelInsurWrapper = document.querySelector('.travel-insurance-wrapper')
if (travelInsurWrapper) {
  addTouchListener(travelInsurWrapper, {
    slidesClass: 'travel-insurance',
    sliderItemsClass: 'travel-insurance-btn',
    slideIndex: 1,
    activeItem: 'active-service-info',
    activeBtn: 'active-info-btn'
  })
}

// for service-save-money page
const assetWrapper = document.querySelector('.asset-types-wrapper')
if (assetWrapper) {
  addTouchListener(assetWrapper, {
    slidesClass: 'asset-types-text',
    sliderItemsClass: 'asset-btn',
    slideIndex: 1,
    activeItem: 'active-model-text',
    activeBtn: 'active-model-btn'
  })
}

//for service-real-estate page
const mortgageWrapper = document.querySelector('.mortgage-wrapper')
if (mortgageWrapper) {
  addTouchListener(mortgageWrapper, {
    slidesClass: 'mortgage-text',
    sliderItemsClass: 'model-text-btn',
    slideIndex: 1,
    activeItem: 'active-mortgage-text',
    activeBtn: 'active-model-btn'
  })
}

// for service-healthcare page
const healthcareWrapper = document.querySelector('.healthcare-wrapper')
if (healthcareWrapper) {
  addTouchListener(healthcareWrapper, {
    slidesClass: 'healthcare-info',
    sliderItemsClass: 'healthcare-info-btn',
    slideIndex: 1,
    activeItem: 'active-service-info',
    activeBtn: 'active-info-btn'
  })
}

const healthModelWrapper = document.querySelector('.healthcare-model-wrapper')
if (healthModelWrapper) {
  addTouchListener(healthModelWrapper, {
    slidesClass: 'healthcare-model-text',
    sliderItemsClass: 'healthcare-btn',
    slideIndex: 1,
    activeItem: 'active-model-text',
    activeBtn: 'active-model-btn'
  })
}

// for academy page
const workShopsContainer = document.querySelector('.workshops')
if (workShopsContainer) {
  addTouchListener(workShopsContainer, {
    slidesClass: 'workshop',
    sliderItemsClass: 'workshop-btn',
    slideIndex: 1,
    activeItem: 'active-workshop',
    activeBtn: 'active-workshop-btn'
  })
}