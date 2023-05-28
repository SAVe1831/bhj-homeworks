let xhr = new XMLHttpRequest();
let items = document.querySelector('#items');
let loader = document.querySelector('#loader');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');

    let valute = JSON.parse(xhr.responseText).response.Valute; 
    let valuteValues = Object.values(valute); 
    
    valuteValues.forEach(elem => {
      items.insertAdjacentHTML('beforeEnd', `<div class="item"><div class="item__code">${elem.CharCode}</div><div class="item__value">${elem.Value}</div><div class="item__currency">руб.</div></div>`
      );
    })
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();