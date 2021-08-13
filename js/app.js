// Burger-Menu
// ===============================

const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const burgerBg = document.querySelector('.bg-helper');
const nav = document.querySelector('.header__inner');
const introH = document.querySelector('.intro').offsetHeight - 130;

window.addEventListener('scroll', () => {
	if (getComputedStyle(burger).display == 'block') {
		if (pageYOffset > introH) {
			burgerBg.style.display = 'block';
			burgerBg.classList.add('active');
		} else {
			burgerBg.style.display = 'none';
			burgerBg.classList.remove('active');
		};
	};
});

if (pageYOffset > introH) {
	burgerBg.style.display = 'block';
	burgerBg.classList.add('active');
} else {
	burgerBg.style.display = 'none';
	burgerBg.classList.remove('active');
};

burger.addEventListener('click', (e) => {
	e.preventDefault();

	burger.classList.toggle('active');
	burgerBg.classList.toggle('active');
	nav.classList.toggle('active');
	body.classList.toggle('no-scroll');
});

// Nav
// ===============================

const subnavItems = document.querySelectorAll('.subnav__item');

if (getComputedStyle(burger).display == 'none') {
	for (let i = 0; i < subnavItems.length; i++) {
		subnavItems[i].onmouseover = function () {
			for (let j = 0; j < subnavItems[i].childNodes.length; j++) {
				const subsubnav = subnavItems[i].childNodes[j].className == 'subsubnav';
				const subsubnavTop1 = subnavItems[i].childNodes[j].className == 'subsubnav top1'
				const subsubnavTop2 = subnavItems[i].childNodes[j].className == 'subsubnav top2';

				if (subsubnav || subsubnavTop1 || subsubnavTop2) {
					const subnav = document.querySelector('.subnav');
					const subnavH = subnav.offsetHeight;
					const subnavW = subnav.offsetWidth;
					const subsubnavH = subnavItems[i].childNodes[j].offsetHeight;
					const subsubnavW = subnavItems[i].childNodes[j].offsetWidth;

					if (subnavH < subsubnavH) {
						subnav.style.height = subsubnavH + 'px';
						subnav.style.width = subnavW + subsubnavW + 'px';
						subnav.style.borderRadius = '0 15px 15px 15px';
					} else {
						subnav.style.height = subnavH + 'px';
						subnav.style.width = subnavW + subsubnavW + 'px';
						subnavItems[i].childNodes[j].style.height = subnavH + 'px';
						subnav.style.borderRadius = '0 15px 15px 15px';
					}

					subnavItems[i].onmouseout = function () {
						subnav.style.height = subnavH + 'px';
						subnav.style.width = subnavW + 'px';
						subnav.style.borderRadius = '0 0 15px 15px';
					};
				}
			}
		}
	}
}