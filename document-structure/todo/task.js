let taskList = document.querySelector('#tasks__list');
let input = document.querySelector('#task__input');
let buttonAdd = document.querySelector('#tasks__add');

function taskAdder() {
    taskList.insertAdjacentHTML('afterEnd', `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`);
    input.value = '';
    let taskRemove = document.querySelector('.task__remove');

    taskRemove.addEventListener('click', event => {
        event.target.closest('.task').remove();
    })
}

buttonAdd.addEventListener('click', event => {
  event.preventDefault();
  if (input.value.trim() !== '') {
    taskAdder();
  }
});