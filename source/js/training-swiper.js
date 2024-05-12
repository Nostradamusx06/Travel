import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const initTrainingSwiper = () => {
    const swiperTraining = new Swiper('.training__swiper', {
      modules: [Navigation],
      speed: 600,

      navigation: {
        nextEl: '.training__button--next',
        prevEl: '.training__button--prev',
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
          initialSlide: 2,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          allowTouchMove: false,
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });

    return swiperTraining;
  };

  initTrainingSwiper();
})();
