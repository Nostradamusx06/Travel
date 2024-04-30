import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const initTourSwiper = () => {
    const swiperTour = new Swiper('.tours__swiper', {
      autoHeight: true,
      modules: [Navigation],
      speed: 600,

      navigation: {
        nextEl: '.tours__button--next',
        prevEl: '.tours__button--prev',
        disabledClass: 'button--disabled',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 1,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1440: {
          allowTouchMove: false,
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    return swiperTour;
  };

  initTourSwiper();
})();
