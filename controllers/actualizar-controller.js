import { clientServices } from "../services/product_services.js";

const form = document.querySelector('[data-formAdd]');

const getInfo = async () => {
    const url = new URL(window.location);
    // console.log(url.searchParams.get("id")); 
    const id = url.searchParams.get('id');

    const urlImg = document.querySelector('[data-url]');
    const category = document.querySelector('[data-category]');
    const name = document.querySelector('[data-name]');
    const price = document.querySelector('[data-price]');

    try{
        const product = await clientServices.productData(id);
        urlImg.value = product.imgUrl;
        category.value = product.category;
        name.value = product.name;
        price.value = product.price;
    }catch(error){
        console.log(`catch error: ${error}`);
    }
}

getInfo();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const ids = url.searchParams.get('id');

    const imgUrl = document.querySelector('[data-url]').value;
    const category = document.querySelector('[data-category]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    

    clientServices.productUpdate(imgUrl, name, price, category, ids).then(() => {
        window.location.href = 'todosProductos.html';
    });
})

