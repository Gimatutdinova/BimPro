  // Определение устройсва (pc/mob)
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
}

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let headerArrows = document.querySelectorAll('.header__arrow');
	if (headerArrows.length > 0) {
		for (let index = 0; index < headerArrows.length; index++) {
			const headerArrow = headerArrows[index];
			headerArrow.addEventListener("click", () => {
				headerArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

  //_______________________________________________



  // Меню бургер

const btn = document.querySelector('.header__btn');
const menu = document.querySelector('.header__menu');
const header = document.querySelector('.header');	

export function headerBtn() {
	btn.addEventListener("click", () => {
		document.body.classList.toggle('_lock');
		btn.classList.toggle('_active');
		menu.classList.toggle('_active');
		header.classList.toggle('_active');
	})
}

  //_________________________________________________
