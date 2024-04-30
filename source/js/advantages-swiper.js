import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const tablet = window.matchMedia('(max-width: 769px)');
  const initAdvantagesSwiper = () => {
    const swiperAdvantages = new Swiper('.advantages__swiper', {
      autoHeight: true,
      modules: [Navigation],
      // speed: 600,
      loop: true,

      slidesPerView: 'auto',
      slidesPerGroup: 2,
      // initialSlide: 4,
      // centeredSlides: true,

      centeredSlidesBounds: true,
      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
        disabledClass: 'button--disabled',
      },

      breakpoints: {
        1440: {
          spaceBetween: 29,
          simulateTouch: false,
        },
      },
    });

    const breakpointSlider = () => {
      if (tablet.matches && swiperAdvantages) {
        swiperAdvantages.destroy();
      }
    };
    breakpointSlider();

    return swiperAdvantages;
  };
  initAdvantagesSwiper();
})();
