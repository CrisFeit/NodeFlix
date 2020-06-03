import Swiper from 'swiper';

export var mySwiper = new Swiper('.main-collection',{
    // Optional parameters
    direction: 'horizontal',
    // loop: true,

    slidesPerView : 5,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });