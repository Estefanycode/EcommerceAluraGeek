import { userServices } from "../services/user_services.js";

const form = document.querySelector('[data-login]');
const userEmailInput = document.querySelector('[data-userEmail]');
const passwordInput = document.querySelector('[data-password]');

const verifyUser = (email, password, u_email, u_password) => {
    return email === u_email && password === u_password;
};

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const u_email = userEmailInput.value;
    const u_password = passwordInput.value;

    try {
        const users = await userServices.usersList();
        const userFound = users.some(({ email, password }) =>
            verifyUser(email, password, u_email, u_password)
        );

        if (userFound) {
            window.location.href = "todosProductos.html";
        } else {
            alert('El correo o contraseña ingresados son incorrectos.');
        }
    } catch (error) {
        console.log(error);
    }
});
