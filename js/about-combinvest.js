const arrowScrollDOM = document.querySelector('.arrow-scroll')
const teamContainerDOM = document.getElementById('team')
const specialistContainerDOM = document.getElementById('specialist')
let isDown = false
let startX
let scrollLeft

arrowScrollDOM.addEventListener('click', () => {
  teamContainerDOM.scrollLeft += specialistContainerDOM.offsetWidth
  event.preventDefault()
})

// Horizontal Click and Drag Scrolling - resource https://codepen.io/thenutz/pen/VwYeYEE
teamContainerDOM.addEventListener('mousedown', (e) => {
  isDown = true
  teamContainerDOM.classList.add('active-team')
  startX = e.pageX - teamContainerDOM.offsetLeft
  scrollLeft = teamContainerDOM.scrollLeft
})
teamContainerDOM.addEventListener('mouseleave', () => {
  isDown = false
  teamContainerDOM.classList.remove('active-team')
})
teamContainerDOM.addEventListener('mouseup', () => {
  isDown = false
  teamContainerDOM.classList.remove('active-team')
})
teamContainerDOM.addEventListener('mousemove', (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - teamContainerDOM.offsetLeft
  const walk = (x - startX) * 3 //scroll-fast
  teamContainerDOM.scrollLeft = scrollLeft - walk
})