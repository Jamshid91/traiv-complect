const banner = new Swiper('.swiper-banner', {
    loop: true,
    spaceBetween: 12,
    pagination: {
      el: '.swiper-banner-pagination',
      clickable: true
    }, 
  
    navigation: {
      nextEl: '.swiper-banner-next',
      prevEl: '.swiper-banner-prev',
    },
  });

  const product = new Swiper('.swiper-product', {
    loop: true,
    spaceBetween: 0,
  
    navigation: {
      nextEl: '.swiper-product-next',
      prevEl: '.swiper-product-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2.1,
      },
      576: {
        slidesPerView: 2.6,
      },
      767: {
        slidesPerView: 3.5,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
}
  });


  const special = new Swiper('.swiper-special', {
    loop: true,
    spaceBetween: 0,
  
    navigation: {
      nextEl: '.swiper-special-next',
      prevEl: '.swiper-special-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2.1,
      },
      576: {
        slidesPerView: 2.6,
      },
      767: {
        slidesPerView: 3.5,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
}
  });

  const news = new Swiper('.swiper-news', {
    loop: true,
    spaceBetween: 0,
  
    navigation: {
      nextEl: '.swiper-news-next',
      prevEl: '.swiper-news-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2.1,
      },
      576: {
        slidesPerView: 2.6,
      },
      767: {
        slidesPerView: 3.5,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
  }
  });

  const offers_head = new Swiper('.swiper-offers-head', {
    loop: false,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 1.3,
      },
      767: {
        slidesPerView: 1.5,
      },
      991: {
        slidesPerView: 2,
      },
  }
  });

  const blog = new Swiper('.swiper-blog', {
    loop: false,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 2.1,
      },
      767: {
        slidesPerView: 2.5,
      },
      991: {
        slidesPerView: 3,
      },
  }
  });

  const mapInfoBtn = document.querySelector('.map-info__btn'),
      mapInfo = document.querySelector('.map-info');

      mapInfoBtn.addEventListener('click', () => {
        mapInfo.classList.add('showMapInfo');
      });


