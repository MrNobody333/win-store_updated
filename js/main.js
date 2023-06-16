// ==================== Burger Menu ====================
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

// ==================== Tab Menu ====================
const leftCol = [...document.querySelectorAll('.left-col li:nth-child(n + 3):not(:last-child)')];
const rightCol = [...document.querySelectorAll('.right-col')];

leftCol[0].style.color = '#3b71fe';

leftCol.forEach((link, index) => {
  link.addEventListener('mouseover', () => {
    rightCol.forEach(col => col.classList.remove('right-col_active'));
    rightCol[index].classList.add('right-col_active');
    
    leftCol.forEach(el => el.style.color = '#2f2f35');
    link.style.color = '#3b71fe';
  });
});

// ==================== Main Slider ====================
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

document.querySelector('.main_next').addEventListener('click', () => {
  next();
  sliderDelay();
});

document.querySelector('.main_prev').addEventListener('click', () => {
  prev();
  sliderDelay();
});

function sliderDelay() {
  clearInterval(timerId);
  timerId = setInterval(next, 5000);
}

timerId = setInterval(next, 5000);

// ==================== Category Slider ====================
const categoryTrack = document.querySelector('.category_track');
const categoryImage = document.querySelectorAll('.category_image');
let categorySlideWidth;
let catergoryCount = 0;

function CategoryInit() {
  categorySlideWidth = categoryImage[0].offsetWidth + 30;
}
CategoryInit();

window.addEventListener('resize', CategoryInit);

function categoryNext() {
  catergoryCount >= categoryImage.length -4 ? catergoryCount = 0 : catergoryCount++;
  categoryRollSlide();
}

function categoryPrev() {
  catergoryCount < 1 ? catergoryCount = categoryImage.length -4 : catergoryCount--;
  categoryRollSlide();
}

function categoryRollSlide() {
  categoryTrack.style.transform = `translateX(-${catergoryCount * categorySlideWidth}px)`;
}

document.querySelector('.category_next').addEventListener('click', () => {
  categoryNext();
});

document.querySelector('.category_prev').addEventListener('click', () => {
  categoryPrev();
});