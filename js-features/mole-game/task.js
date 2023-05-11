const dead = document.querySelector('#dead');
const lost = document.querySelector('#lost');

for (let i = 1; i < 10; i++) {
    let currentHole = document.querySelector('#hole' + i);
    currentHole.onclick = () => {
        if (currentHole.className.includes('hole_has-mole')) {
            dead.textContent++;
            if (dead.textContent == 10) {
                alert('Ура! Вы победили!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent++;
            if (lost.textContent == 5) {
                alert('К сожалению, Вы проиграли');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
}