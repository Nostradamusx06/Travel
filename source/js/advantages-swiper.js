import Swiper from 'swiper';
import { Navigation, Manipulation } from 'swiper/modules';

const mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
const desktop = window.matchMedia('(min-width: 1440px)');

const advantages = document.querySelector('.advantages__swiper');
const slider = advantages.querySelector('.advantages__swiper-wrapper');
const slides = advantages.querySelectorAll('.advantages__swiper-slide');
const clones = [];

const addClassArray = (elems, classs) => {
  elems.forEach((elem) => {
    elem.classList.add(classs);
  });
};

const resetClassArray = (array, classs) => {
  array.forEach((elem) => {
    if (elem.classList.contains(classs)) {
      elem.classList.remove(classs);
    }
  });
};

const cloneSlides = (parent, elems, array) => {
  elems.forEach((elem) => {
    const clone = elem.cloneNode(true);
    clone.setAttribute('aria-hidden', true);
    array.push(clone);
    parent.appendChild(clone);
  });
};

cloneSlides(slider, slides, clones);

const swiper = new Swiper('.advantages__swiper', {
  modules: [Navigation, Manipulation],
  init: false,
  loop: true,
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  speed: 600,
  centeredSlides: true,

  navigation: {
    nextEl: '.advantages__button--next',
    prevEl: '.advantages__button--prev',
  },
  breakpoints: {
    1440: {
      initialSlide: 2,
      spaceBetween: 30,
      autoHeight: false,
      simulateTouch: false,
    },
  },
});

const onScreen = () => {
  if (mobile.matches) {
    swiper.disable();
    addClassArray(clones, 'advantages__swiper-slide--none');
  }
  if (tablet.matches) {
    swiper.disable();
    addClassArray(clones, 'advantages__swiper-slide--none');
  }
  if (desktop.matches) {
    resetClassArray(clones, 'advantages__swiper-slide--none');
    swiper.enable();
    swiper.init();
  }
};

window.addEventListener('load', onScreen);
window.addEventListener('resize', onScreen);
