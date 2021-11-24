import './style.css'

const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')

navBtn.addEventListener('click', (e) => {
  e.preventDefault()

  nav.classList.toggle('hidden')
})
