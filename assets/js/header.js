const menuBtn = document.querySelector('.menu-btn'),
      menuClose = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      header = document.querySelector('.header'),
      catalogsBtn = document.querySelector('.catalogs_btn'),
      catalogss = document.querySelector('.catalogs');

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

let catalogs = catalogsBtn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

catalogsBtn.addEventListener('click', () => {
  catalogs.classList.toggle('showCatalog')
});

document.addEventListener('click', (function(e) {
  catalogs.contains(e.target)||catalogs.classList.remove('showCatalog')
}));



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


  $(document).ready(function() {
    $('.catalog-nav-info').hide();
    $('.catalog-nav-info:first-child').show();
    $('.catalog-nav-base:first-child').addClass('active');
    $('.catalog-nav-base').mouseenter(function() {
      $('.catalog-nav-base').removeClass('active');
      $(this).addClass('active')
      let pageInfo = $(this).attr('data-catalog');
      $('.catalog-nav-info').hide();
      $('.' + pageInfo).show();
    })
});

const childrenCatalogs_show = document.querySelectorAll('.children-catalogs-show');

childrenCatalogs_show.forEach(show => {
  let count = 0;
  show.addEventListener('click', () => {
    if(count == 0) {
      show.parentElement.classList.add('showChildrenCatalog');
      return count = 1;
    } else {
      show.parentElement.classList.remove('showChildrenCatalog');
      return count = 0;
    }
  })
});



const catalogMobLists = document.querySelectorAll('.catalog-mob-list .catalog');
const backMenuBase = document.querySelectorAll('.back-menu-base');
const catalogMenuClose = document.querySelectorAll('.catalog-menu__close');
const catalogMenu = document.querySelector('.catalog-menu');
const catalogMob_btn = document.querySelector('.catalog-mob_btn');
const back_base = document.querySelector('.back_base');

catalogMobLists.forEach(list => {
  list.addEventListener('click', () => {
    list.nextElementSibling.classList.add('openedList')
  });
});

backMenuBase.forEach(back => {
  back.addEventListener('click', () => {
    back.parentElement.parentElement.classList.remove('openedList')
  })
});

catalogMenuClose.forEach(close => {
  close.addEventListener('click', () => {
    catalogMenu.classList.add('d-none')
  })
});

catalogMob_btn.addEventListener('click', () => {
  catalogMenu.classList.remove('d-none')
});

back_base.addEventListener('click', () => {
  catalogMenu.classList.add('d-none')
});