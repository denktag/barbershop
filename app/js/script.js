
$(document).on("click", ".header__item-link", function(e) {
	e.preventDefault();
	let id  = $(this).attr('href');
	let top = $(id).offset().top; // получаем координаты блока
	$('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});

$(document).on("click", ".scroll-up", function(e) {
	e.preventDefault();
	$('body, html').animate({scrollTop: 0}, 800);
});

new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },

  loop: true,

  autoplay: {
    delay: 5000,
  },

  spaceBetween: 30,

  fade: true,

  slideToClickedSlide: true,
});
  
// Определение поддержки браузером формата webp для использования webp в свойстве background-image в scss
function testWebP(callback) {

	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
/////////////////////////////////////////////////////////////////


