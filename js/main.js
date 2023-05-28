const navbarItem = document.querySelector('.navbar__item');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const catalogMenu = document.querySelector('.catalog-menu');

navbarItem.addEventListener('click', () => {
  burgerMenu.firstChild.classList.toggle('span-active');
  burgerMenu.classList.toggle('burger-menu_active');
  overlay.classList.toggle('overlay-active');
  catalogMenu.classList.toggle('catalog-menu_active');
});

window.addEventListener('click', e => {
  if (e.target === overlay) {
    burgerMenu.firstChild.classList.remove('span-active');
    burgerMenu.classList.remove('burger-menu_active');
    overlay.classList.remove('overlay-active');
    catalogMenu.classList.remove('catalog-menu_active');
  }
});

const sliderTrack = document.querySelector('.main_track');
const sliderImage = document.querySelectorAll('.main_image');
let slideWidth;
let slideDifference;
let count = 0;
let timerId = null;

function init() {
  slideWidth = sliderImage[0].offsetWidth + 30;
  slideDifference = sliderTrack.offsetWidth - slideWidth + 30;
  lastSlide();
}
init();

window.addEventListener('resize', init);

function next() {
  count >= sliderImage.length -1 ? count = 0 : count++;
  rollSlide();

  count === sliderImage.length -1 ? lastSlide() : '';
}

function prev() {
  count < 1 ? count = sliderImage.length -1 : count--;
  rollSlide();

  count === sliderImage.length -1 ? lastSlide() : '';
}

function rollSlide() {
  sliderTrack.style.transform = `translateX(-${count * slideWidth}px)`;
}

function lastSlide() {
  sliderTrack.style.transform = `translateX(-${count * slideWidth - slideDifference}px)`;
}

document.querySelectorAll('.slider__arrow').forEach(el => {
  el.addEventListener('click', () => {
    if (el.classList.contains('slider__arrow_next')) {
      next();
    } else {
      prev();
    }
    clearInterval(timerId);
    timerId = setInterval(next, 5000);
  });
});

timerId = setInterval(next, 5000);