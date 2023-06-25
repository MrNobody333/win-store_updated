// ==================== Burger Menu ====================
const navbarItem = document.querySelector('.navbar__item');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const catalogMenu = document.querySelector('.catalog-menu');

navbarItem.addEventListener('click', e => {
  burgerMenu.firstChild.classList.toggle('span-active');
  burgerMenu.classList.toggle('burger-menu_active');
  overlay.classList.toggle('overlay-active');
  catalogMenu.classList.toggle('catalog-menu_active');

  e.preventDefault();
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

function categoryInit() {
  categorySlideWidth = categoryImage[0].offsetWidth + 30;
  categoryPrev();
  categoryNext();
}
categoryInit();

window.addEventListener('resize', categoryInit);

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

// ==================== Popular Goods Tab && Slider ====================
const tabLink = [...document.querySelectorAll('.tab-menu_link')];
const tabProduct = [...document.querySelectorAll('.tab-products')];

tabProduct[0].classList.add('tab-products_active');
tabLink[0].classList.add('link_active');

tabLink.forEach((link, index) => {
  link.addEventListener('click', e => {
    tabProduct.forEach(el => el.classList.remove('tab-products_active'));
    tabLink.forEach(el => el.classList.remove('link_active'));
    tabProduct[index].classList.add('tab-products_active');
    link.classList.add('link_active');
    active(tabProduct[index]);
    
    e.preventDefault();
  });
});
  
function active(activeTab) {
  const popularTrack = activeTab.querySelector('.popular-goods_track');
  const popularImage = activeTab.querySelectorAll('.popular-goods_image');
  let popularSlideWidth;
  let popularCount = 0;
  
  function popularInit() {
    popularSlideWidth = popularImage[0].offsetWidth + 30;
    popularPrev();
    popularNext();
  }
  popularInit();
  
  window.addEventListener('resize', popularInit);
  
  function popularNext() {
    popularCount >= popularImage.length -4 ? popularCount = 0 : popularCount++;
    popularRollSlide();
  }
  
  function popularPrev() {
    popularCount < 1 ? popularCount = popularImage.length -4 : popularCount--;
    popularRollSlide();
  }
  
  function popularRollSlide() {
    popularTrack.style.transform = `translateX(-${popularCount * popularSlideWidth}px)`;
  }
  
  activeTab.querySelector('.popular-goods_next').addEventListener('click', () => {
    popularNext();
  });
  
  activeTab.querySelector('.popular-goods_prev').addEventListener('click', () => {
    popularPrev();
  });
}

active(tabProduct[0]);

// ==================== Recommended Goods Slider ====================
const recommendedTrack = document.querySelector('.recommended-goods_track');
  const recommendedImage = document.querySelectorAll('.recommended-goods_image');
  let recommendedSlideWidth;
  let recommendedCount = 0;
  
  function recommendedInit() {
    recommendedSlideWidth = recommendedImage[0].offsetWidth + 30;
    recommendedPrev();
    recommendedNext();
  }
  recommendedInit();
  
  window.addEventListener('resize', recommendedInit);
  
  function recommendedNext() {
    recommendedCount >= recommendedImage.length -4 ? recommendedCount = 0 : recommendedCount++;
    recommendedRollSlide();
  }
  
  function recommendedPrev() {
    recommendedCount < 1 ? recommendedCount = recommendedImage.length -4 : recommendedCount--;
    recommendedRollSlide();
  }
  
  function recommendedRollSlide() {
    recommendedTrack.style.transform = `translateX(-${recommendedCount * recommendedSlideWidth}px)`;
  }
  
  document.querySelector('.recommended-goods_next').addEventListener('click', () => {
    recommendedNext();
  });
  
  document.querySelector('.recommended-goods_prev').addEventListener('click', () => {
    recommendedPrev();
  });