(function () {
  const header = document.querySelector('.header');
  const mainList = document.querySelector('.main-nav__list');
  const navToggle = document.querySelector('.header__menu-toggle');
  const mainNavLinks = document.querySelectorAll('.main-nav__link');

  header.classList.remove('header--nojs');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('header__menu-toggle--opened');
    mainList.classList.toggle('main-nav__list--opened');
  });

  mainNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainList.classList.remove('main-nav__list--opened');
      navToggle.classList.remove('header__menu-toggle--opened');
    });
  });
})();
