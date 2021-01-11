const tooltipDOM = document.querySelector('.tooltiptext')
const closeTooltipDOM = document.querySelector('.close-tooptip')

function openTooltip() {
  if (window.innerWidth < 768) {
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = 'fixed'
    tooltipDOM.classList.add('tooltip-active')
    closeTooltipDOM.classList.add('menu-arrow-down')
  }
}

function closeTooltip() {
  document.body.style.position = ''
  const scrollY = document.body.style.top
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
  tooltipDOM.classList.remove('tooltip-active')
  closeTooltipDOM.classList.remove('menu-arrow-down')
}

// // Open the Consultancy Pop-up
// const consultancyDOM = document.querySelector('.popup-container')

// function openPopUpWindow() {
//   document.body.style.top = `-${window.scrollY}px`
//   document.documentElement.style.overflowY = 'hidden'
//   document.querySelector('.sticky').style.zIndex = '1'
//   // toTopBtn.style.display = 'none'
//   consultancyDOM.classList.add('popup-container-active')
// }

// function closePopUpWindow() {
//   document.documentElement.style.overflowY = 'auto'
//   document.querySelector('.sticky').style.zIndex = '10000'
//   // toTopBtn.style.display = 'block'
//   const scrollY = document.body.style.top
//   window.scrollTo(0, parseInt(scrollY || '0') * -1)
//   consultancyDOM.classList.remove('popup-container-active')
// }
