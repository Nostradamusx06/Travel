import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const initReviewsSwiper = () => {
    const swiperReviews = new Swiper('.reviews__swiper', {
      autoHeight: true,
      modules: [Navigation],
      speed: 600,

      slidesPerView: 'auto',
      slidesPerGroup: 1,
      watchSlidesProgress: true,

      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
        disabledClass: 'reviews__button--disabled',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        320: {
          allowTouchMove: true,
          width: 290,
          spaceBetween: 40,
        },
        768: {
          allowTouchMove: true,
          width: 575,
          spaceBetween: 30,
        },
        1440: {
          width: 700,
          allowTouchMove: false,
          spaceBetween: 120,
        },
      },
    });

    return swiperReviews;
  };

  initReviewsSwiper();
})();
