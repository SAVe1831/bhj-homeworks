let chatWidget = document.querySelectorAll('.chat-widget');
let chatWidgetSide = document.querySelectorAll('.chat-widget__side');
let messages = document.querySelector( '.chat-widget__messages' );
let input = document.querySelector('#chat-widget__input');
let array = Array.from(chatWidget);
let arraySide = Array.from(chatWidgetSide);

arraySide[0].addEventListener('click', onClickChat);

input.addEventListener('keyup', (e) => {
    onTypeChat(input, e);
});

function onClickChat() {
    array[0].className += ' chat-widget_active';
}

let messagesBot = [
    'Здрасте! И Вам не хворать!',
    'Чего Вам надо?',  
    'Ещё чего?', 
    'Идите лесом',
    'Мне за это не платят',
    'Мне это не интересно',
    'Ага! Щщщас!',
    'Добро пожаловать отсюда!',
    ];

function onTypeChat(elem, e) {
    if ((e.keyCode == 13) && (elem.value.trim() != '')) {
      let now = new Date();
      currentTime = addZero(now.getHours()) + ':' + addZero(now.getMinutes());
      messages.innerHTML += `
        <div class='message message_client'>
          <div class='message__time'>${currentTime}</div>
          <div class='message__text'>${elem.value}</div>
        </div>
      `;
      let index = Math.floor(Math.random() * 8);
      messages.innerHTML += `
        <div class='message'>
          <div class='message__time'>${currentTime}</div>
          <div class='message__text'>${messagesBot[index]}</div>
        </div>
      `;
      elem.value = '';
    }
}

function addZero(num){
    if (num >= 0 && num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  }

