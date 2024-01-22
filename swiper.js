const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    keyboard: true,
   });

var carrousel = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});