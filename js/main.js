const body = document.querySelector('body')
const lightBtn = document.querySelector('.btns__light-mode')
const darkBtn = document.querySelector('.btns__dark-mode')

const menuSections = document.querySelectorAll('.menu__sections')
const menuBtns = document.querySelectorAll('.menu__btn')

const lightMode = () => {
	body.setAttribute('data-theme', 'light')
	lightBtn.classList.add('btns__btn--active')
	darkBtn.classList.remove('btns__btn--active')
}

const darkMode = () => {
	body.setAttribute('data-theme', 'dark')
	lightBtn.classList.remove('btns__btn--active')
	darkBtn.classList.add('btns__btn--active')
}

const showSection = id => {
	menuSections.forEach(section => section.classList.add('d-none'))
	menuBtns.forEach(btn => btn.classList.remove('btn-success'))
	menuBtns.forEach(btn => btn.classList.add('btn-outline-secondary'))
	document.getElementById(id).classList.remove('d-none')

	const currentActiveBtn = document.querySelector(`[data-id=${id}]`)
	currentActiveBtn.classList.remove('btn-outline-secondary')
	currentActiveBtn.classList.add('btn-success')
}

lightBtn.addEventListener('click', lightMode)
darkBtn.addEventListener('click', darkMode)
