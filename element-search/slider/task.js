const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');

const sliders = Array.from(document.getElementsByClassName('slider__item'));

next.onclick = () => {
    let indexActive = sliders.findIndex(item => item.className.includes('slider__item_active'));
    sliders[indexActive].classList.remove('slider__item_active');
    indexActive++;
    if (indexActive === sliders.length) {
        indexActive = 0;
    }
    sliders[indexActive].classList.add('slider__item_active');
}

prev.onclick = () => {
    let indexActive = sliders.findIndex(item => item.className.includes('slider__item_active'));
    sliders[indexActive].classList.remove('slider__item_active');
    indexActive--;
    if (indexActive === -1) {
        indexActive = sliders.length - 1;
    }
    sliders[indexActive].classList.add('slider__item_active');
}