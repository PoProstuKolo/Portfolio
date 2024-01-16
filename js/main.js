const body = document.querySelector('body')
const lightBtn = document.querySelector('.btns__light-mode')
const darkBtn = document.querySelector('.btns__dark-mode')

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

lightBtn.addEventListener('click', lightMode)
darkBtn.addEventListener('click', darkMode)
