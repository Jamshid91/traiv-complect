const options = document.querySelectorAll('.type-select .option'),
      typeHeads = document.querySelectorAll('.type-head'),
      showSelect = document.querySelectorAll('.show-select'),
      clearAllCheck = document.querySelector('.clear-all-check')


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

clearAllCheck.addEventListener('click', () => {
    options.forEach(option => {
        option.classList.remove('checked')
    });
});

const minus = document.querySelectorAll('.amount-minus'),
plus = document.querySelectorAll('.amount-plus'),
amountNum = document.querySelector('.amount-val');

plus.forEach(add => {
add.addEventListener('click', () => {
add.previousElementSibling.value++
});
})

minus.forEach(rem => {
rem.addEventListener('click', () => {
if(rem.nextElementSibling.value > 1) {
rem.nextElementSibling.value--
}
});
});



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
})