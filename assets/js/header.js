const menuBtn = document.querySelector('.menu-btn'),
      menuClose = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
    menu.classList.remove('d-none')
});

menuClose.addEventListener('click', () => {
    menu.classList.add('d-none')
});

window.addEventListener('click', (e) => {
    if(e.target == menu) {
        menu.classList.add('d-none')
    }
});


$(document).ready(function () {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        $('header').addClass('position-sticky')
        $('header').addClass('headerTop')
      } else {
        $('header').removeClass('position-sticky')
      }
    });
  });


// window.addEventListener('scroll', () => {
//     if(scrollTop)  {
//         header.classList.add('position-sticky');
//         header.children[0].classList.add('d-none')
//     } else if (scrollY < 50 ) {
//         // header.classList.remove('position-sticky');
//         // header.children[0].classList.remove('d-none')
//     }
// })