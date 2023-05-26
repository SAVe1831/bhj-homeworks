let quantityButtons = Array.from(document.querySelectorAll('.product__quantity-control'));
let productAddButtons = Array.from(document.querySelectorAll('.product__add'));
let cartProducts = document.querySelector('.cart__products');

quantityButtons.forEach(button => {
  button.addEventListener('click', () => {
    let parent = button.closest('.product__quantity-controls');
    let counter = parent.querySelector('.product__quantity-value');

    if (button.classList.contains('product__quantity-control_inc')) {
      counter.textContent++;
    } else if (button.classList.contains('product__quantity-control_dec') && counter.textContent > 1) {
      counter.textContent--;
    }
  })
})

productAddButtons.forEach(button => {
  button.addEventListener('click', () => {
    let parent = button.closest('.product');
    let counter = parent.querySelector('.product__quantity-value');
    let imageSrc = parent.querySelector('.product__image').src;
    let dataId = parent.getAttribute('data-id');

    let productsId = Array.from(cartProducts.children).find(i => i.getAttribute('data-id') === dataId);

    if (!productsId) {
      cartProducts.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${dataId}"><img class="cart__product-image" src=${imageSrc}><div class="cart__product-count">${counter.textContent}</div></div>`);
    } else {
      let cartProductCount = productsId.querySelector('.cart__product-count'); 
      cartProductCount.textContent = +cartProductCount.textContent + +counter.textContent;
    }
  })
})