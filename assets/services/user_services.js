// GET
const usersList = () => fetch('http://localhost:3000/adminUser').then(response => response.json()).catch(error => console.log(error));

export const userServices = {
    usersList
};