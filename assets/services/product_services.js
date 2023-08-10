// GET
const productList = () => fetch('http://localhost:3000/product').then(response => response.json()).catch(error => console.log(error));

// POST
const createProduct = (imgUrl, name, price, id, category) => {
    return fetch('http://localhost:3000/product',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imgUrl, name, price, id, category})
    }).then(response => {
        if(response.ok){
            return response.body
        }
    })
}

// DELETE 
const deleteProduct = (id) => {
    console.log(`elimina a ${id}`);
    return fetch(`http://localhost:3000/product/${id}`,{
        method: 'DELETE',
    })
}

// PUT
const productData = (id) => {
    return fetch(`http://localhost:3000/product/${id}`).then(response => response.json());
}

const productUpdate = (imgUrl, name, price, category, id) => {
    return fetch(`http://localhost:3000/product/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imgUrl, name, price, category})
    }).then(response => response).catch(error => console.log(error));
}

export const clientServices = {
    productList,
    createProduct,
    deleteProduct,
    productData,
    productUpdate
};