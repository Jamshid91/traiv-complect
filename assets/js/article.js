const articles = new Swiper('.swiper-articles', {
    loop: true,
    spaceBetween: 30,
  
    navigation: {
      nextEl: '.swiper-articles-next',
      prevEl: '.swiper-articles-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
  }
});