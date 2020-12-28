const arrowScrollDOM = document.querySelector('.arrow-scroll')
const teamContainerDOM = document.getElementById('team')
const specialistContainerDOM = document.getElementById('specialist')
const teamBtnDOM = document.getElementsByClassName('team-btn')
let isDown = false
let startX
let scrollLeft

[...teamBtnDOM].forEach(el => el.addEventListener('click', openTeam))

function openTeam() {
  [...teamBtnDOM].forEach(el => el.classList.remove('team-btn-active'))
  event.target.classList.add('team-btn-active')
  // TODO: opening department team members 
}

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
  const walk = (x - startX) * 2 //scroll-faster
  teamContainerDOM.scrollLeft = scrollLeft - walk
})