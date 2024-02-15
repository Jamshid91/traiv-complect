const options = document.querySelectorAll('.type-select .option'),
      typeHeads = document.querySelectorAll('.type-head'),
      showSelect = document.querySelectorAll('.show-select'),
      clearAllCheck = document.querySelectorAll('.clear-all-check')


options.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('checked')
    })
});

typeHeads.forEach(type => {
    type.addEventListener('click', () => {
        type.parentElement.classList.toggle('hideType')
    })
});

showSelect.forEach(btn => {
    let show = 0;
    btn.addEventListener('click', () => {
        if(show == 0) {
            btn.previousElementSibling.classList.add('showAllSelect');
            btn.textContent = 'Скрывать';
            return show = 1;
        } else {
            btn.previousElementSibling.classList.remove('showAllSelect');
            btn.textContent = 'Показать все';
            return show = 0;
        }
    });
});

clearAllCheck.forEach(clear => {
    clear.addEventListener('click', () => {
        options.forEach(option => {
            option.classList.remove('checked')
        });
    });
})



const gridCol_btn = document.querySelector('.grid-col'),
      gridRow_btn = document.querySelector('.grid-row'),
      gridMob_btn = document.querySelector('.grid-mob-btn'),
      products = document.querySelectorAll('.catalog-product')

gridRow_btn.addEventListener('click', () => {
    products.forEach(elem => {
        elem.classList.add('product_row')
    });
    gridRow_btn.classList.add('active');
    gridCol_btn.classList.remove('active');
});

gridCol_btn.addEventListener('click', () => {
    products.forEach(elem => {
        elem.classList.remove('product_row')
    });
    gridRow_btn.classList.remove('active');
    gridCol_btn.classList.add('active');
});

gridMob_btn.addEventListener('click', () => {
    products.forEach(elem => {
        elem.classList.toggle('product_row')
    });
    gridMob_btn.classList.toggle('clickedBtn')
});


const closeFilter = document.querySelector('.close-filter'),
      backFilter = document.querySelector('.back-filter'),
      filterBtn = document.querySelector('.filter-btn'),
      filterMenu = document.querySelector('.filter-menu');

filterBtn.addEventListener('click', () => {
    filterMenu.classList.remove('d-none')
});

closeFilter.addEventListener('click', () => {
    filterMenu.classList.add('d-none')
});
backFilter.addEventListener('click', () => {
    filterMenu.classList.add('d-none')
});


