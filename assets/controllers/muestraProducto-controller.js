import {
    clientServices
} from "../services/product_services.js";

const showProduct = (imgUrl, name, price, id) => {
    const card = document.createElement('div');
    card.classList.add('products__oneBox');
    card.innerHTML = `
        <img src=${imgUrl} alt="imagen producto" class="products__img">
        <div class="products__btnBox">
            <button class="products__delete" data-btnDelete data-productId=${id}></button>
            <a href="editarProducto.html?id=${id}" class="products__edit" data-btnEdit></a>
        </div>
        <div class="products__textBox">
            <h4 class="products__name">${name}</h4>
            <h4 class="products__price">${price}</h4>
            <p class="products__id">ID: #${id}</p>
        </div>`;

    const btnDelete = card.querySelector('[data-btnDelete]');

    btnDelete.addEventListener('click', async () => {
        const productId = btnDelete.getAttribute('data-productId');
        console.log(`clic a ${productId}`);
        if (window.confirm("Realmente desea eliminar este producto?")) {
            try {
                const response = await clientServices.deleteProduct(productId);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    });

    return card;
};

const products = document.querySelector('[data-allProducts]');

clientServices.productList()
    .then((data) => {
        console.log(data);
        data.forEach(({
            imgUrl,
            name,
            price,
            id
        }) => {
            const addProduct = showProduct(imgUrl, name, price, id);
            products.appendChild(addProduct);
        });
    })
    .catch(error => console.log(error));