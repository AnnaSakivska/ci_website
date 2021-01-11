const arrowsContainerDOM = document.querySelector('.arrows-scroll')
const arrowScrollDOM = document.querySelector('.arrow-scroll')
const arrowScrollLeftDOM = document.querySelector('.arrow-scroll-left')

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
  if (teamContainerDOM.scrollLeft >= specialistContainerDOM.offsetWidth) {
    showArrowLeft()
    // arrowScrollLeftDOM.style.display = 'inline-block'
  }
  event.preventDefault()
})

arrowScrollLeftDOM.addEventListener('click', () => {
  teamContainerDOM.scrollLeft -= specialistContainerDOM.offsetWidth
  if (teamContainerDOM.scrollLeft < specialistContainerDOM.offsetWidth) {
    showArrowLeft()
    // arrowScrollLeftDOM.style.display = 'none'
    teamContainerDOM.scrollLeft -= specialistContainerDOM.offsetWidth
  }
})

// Horizontal Click and Drag Scrolling - resource https://codepen.io/thenutz/pen/VwYeYEE
function showArrowLeft() {
  if (teamContainerDOM.scrollLeft >= specialistContainerDOM.offsetWidth) {
    arrowScrollLeftDOM.style.display = 'inline-block'
    arrowsContainerDOM.style.flexDirection = 'column'
  } else {
    arrowScrollLeftDOM.style.display = 'none'
    arrowsContainerDOM.style.flexDirection = 'row'
  }
}

teamContainerDOM.addEventListener('mousedown', (e) => {
  isDown = true
  teamContainerDOM.classList.add('active-team')
  startX = e.pageX - teamContainerDOM.offsetLeft

  scrollLeft = teamContainerDOM.scrollLeft
  showArrowLeft()
})
teamContainerDOM.addEventListener('mouseleave', () => {
  isDown = false
  teamContainerDOM.classList.remove('active-team')
  // showArrowLeft()

})
teamContainerDOM.addEventListener('mouseup', () => {
  isDown = false
  teamContainerDOM.classList.remove('active-team')
  // showArrowLeft()

})
teamContainerDOM.addEventListener('mousemove', (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - teamContainerDOM.offsetLeft
  const walk = (x - startX) * 2 //scroll-faster
  teamContainerDOM.scrollLeft = scrollLeft - walk
  showArrowLeft()
})