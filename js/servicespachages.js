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

