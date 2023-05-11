const clickerCount = document.querySelector('#clicker__counter');
count = 0;
const cookie = document.querySelector('#cookie');

cookie.onclick = function() {
    count++;
    clickerCount.textContent = count;
    if (count % 2) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
}