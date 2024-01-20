const body = document.querySelector('body')
const lightBtn = document.querySelector('.btns__light-mode')
const darkBtn = document.querySelector('.btns__dark-mode')

const menuSections = document.querySelectorAll('.menu__sections')
const menuBtns = document.querySelectorAll('.menu__btn')

const lightMode = () => {
	body.setAttribute('data-theme', 'light')
	lightBtn.classList.add('btns__btn--active')
	darkBtn.classList.remove('btns__btn--active')

	particlesJS(
		'particles-js',

		{
			particles: {
				number: {
					value: 80,
					density: {
						enable: true,
						value_area: 800,
					},
				},
				color: {
					value: '#000',
				},
				shape: {
					type: 'circle',
					stroke: {
						width: 0,
						color: '#000000',
					},
					polygon: {
						nb_sides: 5,
					},
					image: {
						src: 'img/github.svg',
						width: 100,
						height: 100,
					},
				},
				opacity: {
					value: 1,
					random: false,
					anim: {
						enable: false,
						speed: 1,
						opacity_min: 0.1,
						sync: false,
					},
				},
				size: {
					value: 5,
					random: true,
					anim: {
						enable: false,
						speed: 40,
						size_min: 0.1,
						sync: false,
					},
				},
				line_linked: {
					enable: true,
					distance: 150,
					color: '#000',
					opacity: 1,
					width: 1,
				},
				move: {
					enable: true,
					speed: 6,
					direction: 'none',
					random: false,
					straight: false,
					out_mode: 'out',
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 1200,
					},
				},
			},
			interactivity: {
				detect_on: 'canvas',
				events: {
					onhover: {
						enable: true,
						mode: 'repulse',
					},
					onclick: {
						enable: true,
						mode: 'push',
					},
					resize: true,
				},
				modes: {
					grab: {
						distance: 400,
						line_linked: {
							opacity: 1,
						},
					},
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3,
					},
					repulse: {
						distance: 200,
					},
					push: {
						particles_nb: 4,
					},
					remove: {
						particles_nb: 2,
					},
				},
			},
			retina_detect: true,
			config_demo: {
				hide_card: false,
				background_color: '#b61924',
				background_image: '',
				background_position: '50% 50%',
				background_repeat: 'no-repeat',
				background_size: 'cover',
			},
		}
	)
}

const darkMode = () => {
	body.setAttribute('data-theme', 'dark')
	lightBtn.classList.remove('btns__btn--active')
	darkBtn.classList.add('btns__btn--active')

	particlesJS(
		'particles-js',

		{
			particles: {
				number: {
					value: 80,
					density: {
						enable: true,
						value_area: 800,
					},
				},
				color: {
					value: '#00ff00',
				},
				shape: {
					type: 'circle',
					stroke: {
						width: 0,
						color: '#000000',
					},
					polygon: {
						nb_sides: 5,
					},
					image: {
						src: 'img/github.svg',
						width: 100,
						height: 100,
					},
				},
				opacity: {
					value: 0.5,
					random: false,
					anim: {
						enable: false,
						speed: 1,
						opacity_min: 0.1,
						sync: false,
					},
				},
				size: {
					value: 5,
					random: true,
					anim: {
						enable: false,
						speed: 40,
						size_min: 0.1,
						sync: false,
					},
				},
				line_linked: {
					enable: true,
					distance: 150,
					color: '#fff',
					opacity: 0.625,
					width: 1,
				},
				move: {
					enable: true,
					speed: 6,
					direction: 'none',
					random: false,
					straight: false,
					out_mode: 'out',
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 1200,
					},
				},
			},
			interactivity: {
				detect_on: 'canvas',
				events: {
					onhover: {
						enable: true,
						mode: 'repulse',
					},
					onclick: {
						enable: true,
						mode: 'push',
					},
					resize: true,
				},
				modes: {
					grab: {
						distance: 400,
						line_linked: {
							opacity: 1,
						},
					},
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3,
					},
					repulse: {
						distance: 200,
					},
					push: {
						particles_nb: 4,
					},
					remove: {
						particles_nb: 2,
					},
				},
			},
			retina_detect: true,
			config_demo: {
				hide_card: false,
				background_color: '#b61924',
				background_image: '',
				background_position: '50% 50%',
				background_repeat: 'no-repeat',
				background_size: 'cover',
			},
		}
	)
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
