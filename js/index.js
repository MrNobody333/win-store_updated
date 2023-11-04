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
  count >= sliderImage.length - 1 ? count = 0 : count++;
  rollSlide();

  count === sliderImage.length - 1 ? lastSlide() : '';
}

function prev() {
  count < 1 ? count = sliderImage.length -1 : count--;
  rollSlide();

  count === sliderImage.length - 1 ? lastSlide() : '';
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
  timerId = setInterval(next, 4000);
}

timerId = setInterval(next, 4000);

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
  catergoryCount >= categoryImage.length - 4 ? catergoryCount = 0 : catergoryCount++;
  categoryRollSlide();
}

function categoryPrev() {
  catergoryCount < 1 ? catergoryCount = categoryImage.length - 4 : catergoryCount--;
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
    e.preventDefault();
    
    tabProduct.forEach(el => el.classList.remove('tab-products_active'));
    tabLink.forEach(el => el.classList.remove('link_active'));
    tabProduct[index].classList.add('tab-products_active');
    link.classList.add('link_active');
    active(tabProduct[index]);
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
    if (window.innerWidth > 1245) {
      popularCount >= popularImage.length - 4 ? popularCount = 0 : popularCount++;
    } else if (window.innerWidth <= 1245 && window.innerWidth > 800) {
      popularCount >= popularImage.length - 3 ? popularCount = 0 : popularCount++;
    } else {
      popularCount >= popularImage.length - 2 ? popularCount = 0 : popularCount++;
    }
    popularRollSlide();
  }
  
  function popularPrev() {
    if (window.innerWidth > 1245) {
      popularCount < 1 ? popularCount = popularImage.length - 4 : popularCount--;
    } else if (window.innerWidth <= 1245 && window.innerWidth > 800) {
      popularCount < 1 ? popularCount = popularImage.length - 3 : popularCount--;
    } else {
      popularCount < 1 ? popularCount = popularImage.length - 2 : popularCount--;
    }
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
    if (window.innerWidth > 1245) {
      recommendedCount >= recommendedImage.length - 4 ? recommendedCount = 0 : recommendedCount++;
    } else if (window.innerWidth <= 1245 && window.innerWidth > 800) {
      recommendedCount >= recommendedImage.length - 3 ? recommendedCount = 0 : recommendedCount++;
    } else {
      recommendedCount >= recommendedImage.length - 2 ? recommendedCount = 0 : recommendedCount++;
    }
    recommendedRollSlide();
  }
  
  function recommendedPrev() {
    if (window.innerWidth > 1245) {
      recommendedCount < 1 ? recommendedCount = recommendedImage.length - 4 : recommendedCount--;
    } else if (window.innerWidth <= 1245 && window.innerWidth > 800) {
      recommendedCount < 1 ? recommendedCount = recommendedImage.length - 3 : recommendedCount--;
    } else {
      recommendedCount < 1 ? recommendedCount = recommendedImage.length - 2 : recommendedCount--;
    }
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

// ==================== Reed More Btn ====================
const reedMoreBtn = document.querySelector('.about-us__btn');

reedMoreBtn.addEventListener('click', e => {
  e.preventDefault();

  const content = document.querySelector('.about-us__content');

  content.classList.toggle('about-us__content_active');
  content.classList.toggle('about-us__content_bgNone');
  reedMoreBtn.classList.toggle('about-us__btn_active');

  reedMoreBtn.textContent = content.classList.contains('about-us__content_active') ? 
    'Скрыть текст' : 
    'Читать полностью';
});