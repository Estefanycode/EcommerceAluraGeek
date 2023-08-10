import { clientServices } from "../services/product_services.js";

const newProduct = (name, imgUrl, price) => {
    const card = document.createElement('div');
    card.classList.add('product__oneBox');
    card.innerHTML = `
        <img src=${imgUrl} alt="imagen producto" class="product__img">
        <h4 class="product__name">${name}</h4>
        <h4 class="product__price">${price}</h4>
        <a href="#" class="product__watchProduct">Ver producto</a>
    `;
    return card;
};

const getDiv = (category) => {
    return document.querySelector(`[data-products${category}]`);
};

clientServices.productList()
    .then((data) => {
        console.log(data);
        data.forEach(({ name, imgUrl, price, category }) => {
            const products = getDiv(category);
            const addProduct = newProduct(name, imgUrl, price);
            products.appendChild(addProduct);
        });
    })
    .catch(error => console.log(error));
