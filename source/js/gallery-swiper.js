import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const initGallerySwiper = () => {
    const swiperGallery = new Swiper('.gallery__swiper', {
      modules: [Navigation],
      speed: 600,
      loop: true,

      watchSlidesProgress: true,
      spaceBetween: 5,
      slidesPerView: 'auto',
      slidesPerGroup: 1,

      navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
        disabledClass: 'button--disabled',
      },
    });

    if (window.innerWidth > 1439) {
      swiperGallery.destroy();
    }

    return swiperGallery;
  };
  initGallerySwiper();
})();
