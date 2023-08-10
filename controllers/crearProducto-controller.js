import {
    clientServices
} from "../services/product_services.js";

const form = document.querySelector('[data-formAdd]');
const urlInput = document.querySelector('[data-url]');
const categoryInput = document.querySelector('[data-category]');
const nameInput = document.querySelector('[data-name]');
const priceInput = document.querySelector('[data-price]');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const url = urlInput.value;
    const category = categoryInput.value;
    const name = nameInput.value;
    const price = priceInput.value;
    const id = ""; 

    try {
        await clientServices.createProduct(url, name, price, id, category);
        window.location.href = "todosProductos.html";
    } catch (error) {
        console.log(error);
    }
});