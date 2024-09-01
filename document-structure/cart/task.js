const setOnClickEventForClass = (elementClassName, func) => {
    document.querySelectorAll(`.${elementClassName}`).forEach(element => {
        element.addEventListener('click', func);
    });
};

const changeQuantity = (element, value) => {
    const quantityElement = element.target.closest('.product').querySelector('.product__quantity-value');
    const newValue = Math.max(0, +quantityElement.textContent + value);
    quantityElement.textContent = newValue;
    updateLocalStorage();
};

const incrementStep = 1;

const decrement = element => changeQuantity(element, -incrementStep);
const increment = element => changeQuantity(element, incrementStep);

const cartProducts = document.querySelector('.cart__products');

const createCartProductHTML = (productId, image, quantity) => `
    <div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${image}">
        <div class="cart__product-count">${quantity}</div>
        <button class="cart__product-remove">Удалить</button>
    </div>
`;

const addProductToCart = element => {
    const product = element.target.closest('.product');
    const quantity = +product.querySelector('.product__quantity-value').textContent;
    const image = product.querySelector('.product__image').getAttribute('src');
    const productId = product.getAttribute('data-id');

    const productInCart = cartProducts.querySelector(`[data-id="${productId}"]`);
    if (productInCart) {
        animateProductImage(product, productInCart);
        setTimeout(() => {
            productInCart.querySelector('.cart__product-count').textContent = 
                +(productInCart.querySelector('.cart__product-count').textContent) + quantity;
            updateLocalStorage();
        }, 900);

    } else {
        const fakeHtml = document.createElement('div');
        fakeHtml.innerHTML = `
            <div style="
                border-radius: 6px;
                margin-left: 10px;
                width: 100px;
                height: 100px;
                object-fit: contain;
            "></div>
            <p></p>
        `;
        cartProducts.appendChild(fakeHtml);
        cartProducts.closest('.cart').style.display = 'block';

        animateProductImage(product, fakeHtml);

        setTimeout(() => {
            fakeHtml.remove();
            cartProducts.insertAdjacentHTML('beforeend', createCartProductHTML(productId, image, quantity));
            cartProducts.querySelector(`[data-id="${productId}"] .cart__product-remove`)
                .addEventListener('click', removeProductFromCart);
            updateLocalStorage();

        }, 900);
    }
};

const animateProductImage = (product, target) => {
    const image = product.querySelector('.product__image').getAttribute('src');
    const movingImg = document.createElement('img');
    movingImg.setAttribute('src', image);
    movingImg.style.position = 'absolute';
    movingImg.style.width = '100px';
    movingImg.style.height = '100px';
    movingImg.style.objectFit = 'contain';
    movingImg.style.left = `${product.querySelector('img').offsetLeft - window.scrollX}px`;
    movingImg.style.top = `${product.querySelector('img').offsetTop - window.scrollY}px`;
    document.body.appendChild(movingImg);

    const duration = 800;

    setTimeout(() => {
        movingImg.style = `
            position: fixed;
            width: 100px;
            height: 100px;
            object-fit: contain;
            left: ${target.offsetLeft - window.scrollX}px;
            top: ${target.offsetTop - window.scrollY}px;
            transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transition-duration: ${duration}ms;
        `;
    }, 100);

    setTimeout(() => {
        movingImg.remove();
    }, 900);
};

const removeProductFromCart = element => {
    element.target.closest('.cart__product').remove();
    if (!cartProducts.childElementCount) {
        cartProducts.closest('.cart').style.display = 'none';
    }
    updateLocalStorage();
};

const updateLocalStorage = () => {
    const cartItems = Array.from(cartProducts.querySelectorAll('.cart__product')).map(product => ({
        id: product.getAttribute('data-id'),
        quantity: +product.querySelector('.cart__product-count').textContent,
        image: product.querySelector('.cart__product-image').getAttribute('src'),
    }));
    cartItems.sort((a, b) => a.id - b.id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};


document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.forEach(item => {
        cartProducts.insertAdjacentHTML('beforeend', createCartProductHTML(item.id, item.image, item.quantity));
        cartProducts.querySelector(`[data-id="${item.id}"] .cart__product-remove`)
            .addEventListener('click', removeProductFromCart);
    });
    if (cartItems.length > 0) {
        cartProducts.closest('.cart').style.display = 'block';
    }
});

const addEvents = () => {
    setOnClickEventForClass('product__quantity-control_dec', decrement);
    setOnClickEventForClass('product__quantity-control_inc', increment);
    setOnClickEventForClass('product__add', addProductToCart);
};

addEvents();