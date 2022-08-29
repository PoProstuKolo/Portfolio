document.addEventListener('DOMContentLoaded', function () {
	const loader = document.querySelector('.loader');
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	document.onreadystatechange = function () {
		if (document.readyState !== 'complete') {
			loader.classList.add('show-loader');
		} else {
			loader.classList.remove('show-loader');
		}
	};

	function serverPlayers() {
		return fetch('https://api.minetools.eu/ping/skyhype.pl/25565')
			.then(res => {
				return res.json();
			})
			.then(data => {
				let playersOnline = data.players.online;
				return playersOnline;
			});
	}

	serverPlayers().then(v => {
		document.querySelector('.server-status').innerHTML = v;
	});

	function addShadow() {
		if (window.scrollY >= 150) {
			nav.classList.add('shadow-bg');
			console.log('Test');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')));

	window.addEventListener('scroll', addShadow);
});
