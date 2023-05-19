const navbarItem = document.querySelector('.navbar__item');
const burgerMenu = document.querySelector('.burger-menu');

navbarItem.addEventListener('click', () => {
  burgerMenu.firstChild.classList.toggle('span-active');
  burgerMenu.classList.toggle('burger-active');
});