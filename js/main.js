document.addEventListener('DOMContentLoaded', function () {
	const sidebar = document.querySelector('.sidebar');
	const btnSidebar = document.querySelector('.btn-sidebar-show');
	const allSidebarItem = document.querySelectorAll('.sidebar-item');
	const menuIcon = document.querySelector('.menu-icon');

	function sidebarShow() {
		sidebar.classList.toggle('sidebar-show');
		menuIcon.classList.toggle('menu-rotate');
	}

	function btnBg() {
		if (window.scrollY >= 350) {
			btnSidebar.classList.add('shadow-bg');
		} else {
			btnSidebar.classList.remove('shadow-bg');
		}
	}

	allSidebarItem.forEach(item => item.addEventListener('click', () => sidebar.classList.remove('sidebar-show')));
	allSidebarItem.forEach(item => item.addEventListener('click', () => menuIcon.classList.remove('menu-rotate')));

	btnSidebar.addEventListener('click', sidebarShow);
	window.addEventListener('scroll', btnBg);
});
