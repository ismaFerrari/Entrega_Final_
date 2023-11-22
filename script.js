const API_URL = 'https://jsonplaceholder.typicode.com/users';

function renderUser(user) {
    const userList = document.getElementById('user-list');
    const listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${user.name} (${user.email})`;
    userList.appendChild(listItem);
}

function saveUserLocally(user) {
    try {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
        console.error('Error al guardar usuario localmente:', error);
    }
}

// Utiliza async/await para manejar promesas de manera más limpia
async function cargarUsuariosDesdeAPI() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        // Aquí podrías guardar los usuarios en tu aplicación o hacer algo más con ellos
        users.forEach(user => {
            renderUser(user);
            saveUserLocally(user);
        });
    } catch (error) {
        console.error('Error al cargar usuarios desde la API:', error);
    }
}

// Llama a la función para cargar usuarios desde la API
cargarUsuariosDesdeAPI();

const localUsers = JSON.parse(localStorage.getItem('users')) || [];
localUsers.forEach(user => {
    renderUser(user);
});

const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    const newName = nameInput.value.trim();
    const newEmail = emailInput.value.trim();

    if (newName === '' || newEmail === '') {
        console.error('Nombre y email son campos obligatorios');
        return;
    }

    if (!isValidEmail(newEmail)) {
        console.error('Formato de email no válido');
        return;
    }

    const newUser = {
        name: newName,
        email: newEmail
    };

    renderUser(newUser);
    saveUserLocally(newUser);

    nameInput.value = '';
    emailInput.value = '';
});

function isValidEmail(email) {
    // Expresión regular simple para validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function deleteUser(user) {
    try {
        const userList = document.getElementById('user-list');
        const userIndex = localUsers.findIndex(u => u.name === user.name && u.email === user.email);

        if (userIndex !== -1) {
            localUsers.splice(userIndex, 1);
            localStorage.setItem('users', JSON.stringify(localUsers));

            userList.removeChild(userList.children[userIndex]);
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
    }
}
const API_URL = 'https://jsonplaceholder.typicode.com/users';

function renderUser(user) {
    const userList = document.getElementById('user-list');
    const listItem = document.createElement('li');
    listItem.textContent = `Nombre: ${user.name} (${user.email})`;
    userList.appendChild(listItem);
}

function saveUserLocally(user) {
    try {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
        console.error('Error al guardar usuario localmente:', error);
    }
}

// Utiliza async/await para manejar promesas de manera más limpia
async function cargarUsuariosDesdeAPI() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        // Aquí podrías guardar los usuarios en tu aplicación o hacer algo más con ellos
        users.forEach(user => {
            renderUser(user);
            saveUserLocally(user);
        });
    } catch (error) {
        console.error('Error al cargar usuarios desde la API:', error);
    }
}

// Llama a la función para cargar usuarios desde la API
cargarUsuariosDesdeAPI();

const localUsers = JSON.parse(localStorage.getItem('users')) || [];
localUsers.forEach(user => {
    renderUser(user);
});

const userForm = document.getElementById('user-form');
userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    const newName = nameInput.value.trim();
    const newEmail = emailInput.value.trim();

    if (newName === '' || newEmail === '') {
        console.error('Nombre y email son campos obligatorios');
        return;
    }

    if (!isValidEmail(newEmail)) {
        console.error('Formato de email no válido');
        return;
    }

    const newUser = {
        name: newName,
        email: newEmail
    };

    renderUser(newUser);
    saveUserLocally(newUser);

    nameInput.value = '';
    emailInput.value = '';
});

function isValidEmail(email) {
    // Expresión regular simple para validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function deleteUser(user) {
    try {
        const userList = document.getElementById('user-list');
        const userIndex = localUsers.findIndex(u => u.name === user.name && u.email === user.email);

        if (userIndex !== -1) {
            localUsers.splice(userIndex, 1);
            localStorage.setItem('users', JSON.stringify(localUsers));

            userList.removeChild(userList.children[userIndex]);
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
    }
}

const userSelect = document.getElementById('user-select');
localUsers.forEach(user => {
    const option = document.createElement('option');
    option.value = user.email;
    option.textContent = user.name;
    userSelect.appendChild(option);
});

const deleteButton = document.getElementById('delete-user');
deleteButton.addEventListener('click', () => {
    const selectedEmail = userSelect.value;
    const selectedUser = localUsers.find(user => user.email === selectedEmail);

    if (selectedUser) {
        deleteUser(selectedUser);
        userSelect.value = '';
    }
});

const userSelect = document.getElementById('user-select');
localUsers.forEach(user => {
    const option = document.createElement('option');
    option.value = user.email;
    option.textContent = user.name;
    userSelect.appendChild(option);
});

const deleteButton = document.getElementById('delete-user');
deleteButton.addEventListener('click', () => {
    const selectedEmail = userSelect.value;
    const selectedUser = localUsers.find(user => user.email === selectedEmail);

    if (selectedUser) {
        deleteUser(selectedUser);
        userSelect.value = '';
    }
});
