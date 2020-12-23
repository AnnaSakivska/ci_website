let slideIndex = 1
let benefitSlideIndex = 1
let isBtnActive = false
let partnersDOM = document.querySelector(".partners")
parsePartnersLogos([
  'https://combinvest.s3.eu-west-1.amazonaws.com/partner_logos/5eac4031536f0000551cccc9/1588346929894-12.png',
  'https://combinvest.s3.eu-west-1.amazonaws.com/partner_logos/5eac4003c3e8f10056441d05/1588346883929-9.png',
  'https://combinvest.s3.eu-west-1.amazonaws.com/partner_logos/5ec248d1be9efc0063aa3241/1589790929148-3.png',
  'https://combinvest.s3.eu-west-1.amazonaws.com/partner_logos/5eac4003c3e8f10056441d05/1588346883929-9.png',
  'https://combinvest.s3.eu-west-1.amazonaws.com/partner_logos/5eac4031536f0000551cccc9/1588346929894-12.png',
  'https://combinvest.s3.eu-west-1.amazonaws.com/partner_logos/5eac4031536f0000551cccc9/1588346929894-12.png',
  'https://combinvest.s3.eu-west-1.amazonaws.com/partner_logos/5eac3fbcc3e8f10056441cfd/1588346812313-5.png'
]) // TEST - not a real partners

// Activate btns in Benefits section
function activeteBenefitBtn() {
  if (!isBtnActive) {
    const showNoteBtn = document.getElementById("show-benefits-note")
    const saveNote = document.querySelector(".saving-note");
    [...document.getElementsByClassName("benefits-btn")].map(el => el.classList.remove("active-btn"))
    isBtnActive = true
    event.target.classList.add("active-btn", "white-text")
    if (showNoteBtn.classList.contains('active-btn')) {
      saveNote.classList.add("active-note")
    } else {
      saveNote.classList.remove("active-note")
    }
  }
  isBtnActive = false
}

function showBenefitsNoteMobile() {
  const saveNote = document.querySelector(".saving-note")
  saveNote.classList.toggle("active-note")
  isBtnActive = !isBtnActive
}

// Chart 
const footNote = document.querySelector('.chart-footnote')
const chartWrapper = document.querySelector('.benefits-chart')
const tenefitCart = document.getElementById('benefitsChart')

const chartColors = [
  "rgb(77, 124, 255)",
  "rgba(46, 74, 140)",
  "rgb(145, 229, 233)",
  "rgba(77, 124, 255)",
  "rgba(88, 129, 244)",
  "rgb(24, 166, 222)",
  "rgb(145, 229, 233)",
  "rgba(0, 0, 0, 0)",
  "rgba(0, 0, 0, 0)",
  "rgba(0, 0, 0, 0)",
  "rgba(0, 0, 0, 0)",
  "rgba(0, 0, 0, 0)",
  "rgba(0, 0, 0, 0)",
  "rgba(0, 0, 0, 0)"
]

const ctx = document.getElementById('benefitsChart').getContext('2d')
let benefitsChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    datasets: [{
      data: [1700, 1400, 1100, 1200, 1700, 800, 1500, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: chartColors,
      borderColor: chartColors,
      borderWidth: '0'
    }]
  },
  options: {
    scale: {
      ticks: { display: false },
      gridLines: { display: false }
    },
    tooltips: { enabled: false },
    hover: { mode: null },
    responsive: true,
    maintainAspectRatio: false,
    onResize: function () {
      resize()
    }
  }
})

ctx.canvas.parentNode.style.height = '960px'
ctx.canvas.parentNode.style.width = '960px'

function resize() {
  footNote.style.top = `${tenefitCart.offsetHeight / 2}px`
  if (window.innerWidth > 1168) {
    ctx.canvas.parentNode.style.height = '960px'
    ctx.canvas.parentNode.style.width = '960px'
  } else if (window.innerWidth < 1168 && window.innerWidth > 768) {
    ctx.canvas.parentNode.style.height = '660px'
    ctx.canvas.parentNode.style.width = '660px'
  } else if (window.innerWidth < 768 && window.innerWidth > 480) {
    ctx.canvas.parentNode.style.height = '400px'
    ctx.canvas.parentNode.style.width = '400px'
    chartWrapper.style.top = '0'
  } else if (window.innerWidth < 480) {
    ctx.canvas.parentNode.style.height = '300px'
    ctx.canvas.parentNode.style.width = '300px'
    chartWrapper.style.top = '5rem'
  }
}

window.onresize = resize

// Partners section
function parsePartnersLogos(partners) {
  partners.forEach(element => {
    const node = document.createElement('div')
    node.classList.add('slick-slide')
    node.innerHTML = `<div class="partners-slide" style="background: url('${element}') center center / contain no-repeat;"></div>`
    partnersDOM.appendChild(node)
  })
}

