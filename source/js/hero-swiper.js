import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

(function () {

  const initHeroSwiper = () => {
    const swiperHero = new Swiper('.hero__swiper', {
      modules: [Pagination],
      loop: true,
      slidesPerView: 1,
      speed: 600,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1440: {
          allowTouchMove: false,
        },
      },

      // autoHeight: true,
    });

    return swiperHero;
  };

  initHeroSwiper();
})();
