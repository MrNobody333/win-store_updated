// ==================== Burger Menu ====================
const navbarItem = document.querySelector('.navbar__item');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const catalogMenu = document.querySelector('.catalog-menu');

navbarItem.addEventListener('click', e => {
  e.preventDefault();
  
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