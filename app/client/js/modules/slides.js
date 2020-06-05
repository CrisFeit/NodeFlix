import Swiper from 'swiper';

export const horizontal = new Swiper('.main-collection',{
    direction: 'horizontal',

    slidesPerView : 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      }
    }
  });