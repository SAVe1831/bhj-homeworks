let modalMain = document.querySelector('#modal_main');
let modalClose = Array.from(document.getElementsByClassName('modal__close'));
let showSuccess = document.querySelector('.show-success');
let modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

modalClose.forEach(item => item.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
});

showSuccess.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};