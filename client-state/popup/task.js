let modal = document.querySelector('#subscribe-modal');
let modalClose = document.querySelector('.modal__close');

let pairs = document.cookie.split('; ')
let cookie = pairs.find((i) => i.startsWith('modal' + '='));

if (!cookie) {
  modal.classList.add('modal_active');
} else {
  modal.classList.remove('modal_active');
};

modalClose.addEventListener('click', (event) => {
  modal.classList.remove('modal_active');
  document.cookie = 'modal=close';
  event.preventDefault();
});