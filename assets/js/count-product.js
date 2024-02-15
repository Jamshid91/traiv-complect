const addProducts = document.querySelectorAll('.amount-plus'),
removeProducts = document.querySelectorAll('.amount-minus'),
amountNum = document.querySelector('.amount-val');

addProducts.forEach(add => {
    add.addEventListener('click', () => {
    add.previousElementSibling.value++
    });
})

removeProducts.forEach(rem => {
    rem.addEventListener('click', () => {
        if(rem.nextElementSibling.value > 1) {
        rem.nextElementSibling.value--
        }
    });
});