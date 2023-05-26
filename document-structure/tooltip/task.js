let tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
let div = document.createElement('div');

div.className = 'tooltip';

tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', event => {
        event.preventDefault();

    let target = event.target;

    if (target.title === div.innerText) {
      div.classList.toggle('tooltip_active');
      return;
    } 
    
    div.innerText = target.title;
    let { bottom, left } = target.getBoundingClientRect();
    div.style = `left: ${left}px; top: ${bottom}px`;
    target.insertAdjacentElement('afterEnd', div);
    div.classList.add('tooltip_active');
  })
})