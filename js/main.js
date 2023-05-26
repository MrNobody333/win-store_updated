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

const sliderTrack = document.querySelector('.slider__track');
let count = 0;
let timerId = null;

function next() {
  sliderTrack.style.transform += 'translateX(-900px)';
  count++;
  if (count === 2) {
    sliderTrack.style.transform = 'translateX(-1500px)';
  } else if (count === 3) {
    sliderTrack.style.transform = 'translateX(0)';
    count = 0;
  }
}

function prev() {
  if (count === 0) {
    sliderTrack.style.transform = 'translateX(-1500px)';
    count = 2;
  } else if (count === 1) {
    sliderTrack.style.transform = 'translateX(0)';  
    count = 0;
  } else if (count === 2) {
    sliderTrack.style.transform = 'translateX(-600px)';
    count = 1;
  }
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