let reveals = document.querySelectorAll('.reveal'); 

window.addEventListener('scroll', () => {
  reveals.forEach(reveal => {
    let {top, bottom} = reveal.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
      return false;
    }
    reveal.classList.add('reveal_active');
  });
});