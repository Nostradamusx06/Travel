import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const tablet = window.matchMedia('(max-width: 769px)');
  const initAdvantagesSwiper = () => {
    const swiperAdvantages = new Swiper('.advantages__swiper', {
      autoHeight: true,
      modules: [Navigation],
      speed: 600,
      loop: true,

      slidesPerView: 'auto',
      slidesPerGroup: 2,
      initialSlide: 3,
      centeredSlides: true,

      centeredSlidesBounds: true,
      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
        disabledClass: 'button--disabled',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        1440: {
          spaceBetween: 28,
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

    swiperAdvantages.slideNext(0);
    setTimeout(() => {
      swiperAdvantages.slidePrev(0);
    }, 100);

    return swiperAdvantages;
  };
  initAdvantagesSwiper();
})();
