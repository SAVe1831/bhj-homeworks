let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    let xhrJson = JSON.parse(xhr.responseText); 
    let answers = xhrJson.data.answers;
    let pollTitle = document.querySelector('#poll__title');

    pollTitle.textContent = xhrJson.data.title;

    answers.forEach(elem => {
      document.querySelector('#poll__answers').insertAdjacentHTML('beforeEnd', `<button class="poll__answer">${elem}</button>`);
    });

    Array.from(document.getElementsByClassName('poll__answer')).forEach(elem => {
      elem.addEventListener('click', () => {
        alert('Ваш голос принят! Спасибо за участие в опросе!');
      })
    })
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();