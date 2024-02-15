
    var productSlider = new Swiper('.big-card', {
        spaceBetween: 0,
        centeredSlides: false,
        loop:true,
        direction: 'horizontal',
        loopedSlides: 5,
        resizeObserver:true,
        
        pagination: {
            el: '.swiper-big-card-pagination',
            clickable: true
        }, 
    });
    var productThumbs = new Swiper('.small-card', {
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
        direction: 'vertical',
        slidesPerView: 5,
        loopedSlides: 5,    
    });
    productSlider.controller.control = productThumbs;
    productThumbs.controller.control = productSlider;



  $('.big-card .swiper-slide').zoom({
    magnify: 1.5
  });


  const characteristics = document.querySelector('.characteristics'),
        characteristicsBtn = document.querySelector('.characteristics__btn'),
        materials = document.querySelectorAll('.materials .material');


let count2 = 0;
characteristicsBtn.addEventListener('click', () => {
if(count2 == 0) {
  characteristicsBtn.textContent = 'Свернуть характеристики';
  characteristics.classList.add('allCharacteristics');
  return count2 = 1;
} else {
  characteristicsBtn.textContent = 'Все характеристики';
  characteristics.classList.remove('allCharacteristics');
  return count2 = 0;
}
});

materials.forEach(material => {
    material.addEventListener('click', () => {
        material.classList.toggle('checked')
    })
})

$(document).ready(function() {
    $('.description-tab').hide();
    $('.description-tab:first-child').show();
    $('.tab-button').click(function() {
      $(this).addClass('active')
      let pageInfo = $(this).attr('data-tabs');
      $('.description-tab').hide();
      $('.' + pageInfo).show();
    })
});


const characteristic = new Swiper('.swiper-characteristics', {
    loop: true,
    spaceBetween: 12,
    breakpoints: {
        0: {
          slidesPerView: 1.1,
        },
        576: {
          slidesPerView: 1,
        },
    }
  });


  const similar_products = new Swiper('.swiper-similar-products', {
    loop: true,
    spaceBetween: 12,
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

  const related_products = new Swiper('.swiper-related-products', {
    loop: true,
    spaceBetween: 0,
  
    navigation: {
      nextEl: '.swiper-related-products-next',
      prevEl: '.swiper-related-products-prev',
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


const viewAll_materials = document.querySelector('.viewAll-materials');
const materialsMob = document.querySelector('.materials-mob');
const closes = document.querySelectorAll('.materials-mob .close');

viewAll_materials.addEventListener('click', () => {
  materialsMob.classList.remove('d-none')
});

closes.forEach(close => {
  close.addEventListener('click', () => {
    materialsMob.classList.add('d-none')
  });
})

