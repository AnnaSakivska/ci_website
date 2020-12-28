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

function scrollFunction() {
  if (toTopBtn) toTopBtn.style.display = (toTopBtn && document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none"

  // if (toTopBtn && document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //   toTopBtn.style.display = "block"
  // } else {
  //   toTopBtn.style.display = "none"
  // }
}
window.onscroll = function () { scrollFunction() }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

// Slider
function showSlides(slidesClass, sliderItemsClass, slideIndex, activeItem, activeBtn) {
  const slides = document.getElementsByClassName(slidesClass)
  const sliderItems = document.getElementsByClassName(sliderItemsClass)

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove(activeItem)
  }

  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].className = sliderItems[i].className.replace(` ${activeBtn}`, '')
  }
  slides[slideIndex - 1].classList.add(activeItem)
  sliderItems[slideIndex - 1].className += ` ${activeBtn}`
}
