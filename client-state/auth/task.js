let form = document.querySelector('#signin__form');
let control = document.querySelectorAll('.control')
let inputFields = Array.from(control);
let userId = document.querySelector('#user_id');
let signin = document.querySelector('.signin');
let welcome = document.querySelector('.welcome');
let button = document.querySelector('.btn');

let savedId;

form.addEventListener('submit', (event) => {
  let xhr = new XMLHttpRequest();
  
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      let response = JSON.parse(xhr.responseText);

      if (response.success) {
        inputFields.value = '';
        localStorage.setItem('id', JSON.stringify(response.user_id));
        savedId = localStorage.getItem('id');
        userId.textContent = savedId;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');                
      } else {
        alert('Неверный логин или пароль');               
      };
    };
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  
  const formData = new FormData(form);
  xhr.send(formData);

  event.preventDefault();
});

window.addEventListener('load', () => {
  savedId = localStorage.getItem('id');
  if (savedId) {
    userId.textContent = savedId;
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active'); 
  }
});