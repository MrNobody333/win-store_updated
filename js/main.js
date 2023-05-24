const navbarItem = document.querySelector('.navbar__item');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const catalogMenu = document.querySelector('.catalog-menu');

navbarItem.addEventListener('click', () => {
  burgerMenu.firstChild.classList.toggle('span-active');
  burgerMenu.classList.toggle('burger-active');
  overlay.classList.toggle('overlay-active');
  catalogMenu.classList.toggle('catalog-menu_active');
});

const sliderArrow = [...document.querySelectorAll('.slider__arrow')];
const sliderImage = [...document.querySelectorAll('.slider__inner')];
let count = 0;

sliderArrow.forEach(el => {
  el.addEventListener('click', () => {
    if (el.classList.contains('slider__arrow_next')) {
      sliderImage.forEach(sl => {
        sl.style.transform += 'translateX(-900px)';
      });
      count++;
      if (count === 2) {
        sliderImage.forEach(sl => {
          sl.style.transform += 'translateX(300px)';
        });
      }
      if (count === 3) {
        sliderImage.forEach(sl => {
          sl.style.transform += 'translateX(2400px)';
        });
        count = 0;
      }
    } else {
      if (count === 0) {
        sliderImage.forEach(sl => {
          sl.style.transform = 'translateX(-1500px)';
          count = 2;
        });
      } else if (count === 1) {
        sliderImage.forEach(sl => {
          sl.style.transform = 'translateX(0)';
          count = 0;
        });
      } else if (count === 2) {
        sliderImage.forEach(sl => {
          sl.style.transform = 'translateX(-900px)';
          count = 1;
        });
      }
    }
  });
});



