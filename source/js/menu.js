(function () {
  const header = document.querySelector('.header');
  const mainList = document.querySelector('.main-nav__list');
  const navToggle = document.querySelector('.header__menu-toggle');
  const mainNavLinks = document.querySelectorAll('.main-nav__link');
  const pageBody = document.querySelector('.page-body');
  const pageBodyWrapper = document.querySelector('.page-body__wrapper');

  header.classList.remove('header--nojs');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('header__menu-toggle--opened');
    mainList.classList.toggle('main-nav__list--opened');
    if (mainList.classList.contains('main-nav__list--opened')) {
      pageBody.classList.add('page-body--hidden');
      pageBodyWrapper.classList.add('page-body__wrapper--active');
    } else {
      pageBody.classList.remove('page-body--hidden');
      pageBodyWrapper.classList.remove('page-body__wrapper--active');
    }
  });

  mainNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainList.classList.remove('main-nav__list--opened');
      navToggle.classList.remove('header__menu-toggle--opened');
      pageBody.classList.remove('page-body--hidden');
      pageBodyWrapper.classList.remove('page-body__wrapper--active');
    });
  });
})();
