let editor = document.querySelector('#editor');
let clearBtn = document.querySelector('.clear__button') 

editor.addEventListener('input', () => {
  if (editor.value.trim() !== '') {
    localStorage.setItem('editorValue', editor.value);
  }
});

clearBtn.addEventListener('click', () => {
  editor.value = '';
  localStorage.clear();
});

editor.value = localStorage.getItem('editorValue');