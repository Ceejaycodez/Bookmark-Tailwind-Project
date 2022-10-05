const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const menuItems = document.querySelectorAll('.menu-item');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

//  * Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

// * Hamburger menu items event listener
menuItems.forEach((menuItem) => {
	menuItem.addEventListener('click', hamburgerDisappear);
});

// * Hamburger button event listener
btn.addEventListener('click', navToggle);

// * Tabs Function
function onTabClick(e) {
	// * deactivate all Tabs
	tabs.forEach((tab) => {
		tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0');
	});

	// * Hide all Panels
	panels.forEach((panel) => panel.classList.add('hidden'));

	// * Activate Targetted Tab and Panel
	e.target.classList.add('border-softRed', 'border-b-4');
	const classString = e.target.getAttribute('data-target');
	const allPanels = document.getElementById('panels');
	const panel = allPanels.getElementsByClassName(classString)[0];
	panel.classList.remove('hidden');
}

// * Hamburger Button/Menu Function
function navToggle() {
	btn.classList.toggle('open');
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');

	if (menu.classList.contains('flex')) {
		logo.setAttribute('src', './images/logo-bookmark-footer.svg');
	} else {
		logo.setAttribute('src', './images/logo-bookmark.svg');
	}
}

// * Hamburger Menu disappear on Hamburger Menu Item Click
function hamburgerDisappear() {
	btn.classList.toggle('open');
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');

	if (menu.classList.contains('flex')) {
		logo.setAttribute('src', './images/logo-bookmark-footer.svg');
	} else {
		logo.setAttribute('src', './images/logo-bookmark.svg');
	}
}
