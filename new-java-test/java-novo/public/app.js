const API_URL = '/api/usuarios';

// Elements
const form = document.getElementById('user-form');
const userIdInput = document.getElementById('user-id');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const idadeInput = document.getElementById('idade');
const usersList = document.getElementById('users-list');
const usersTable = document.getElementById('users-table');
const loading = document.getElementById('loading');
const noUsers = document.getElementById('no-users');
const formTitle = document.getElementById('form-title');
const btnSubmit = document.getElementById('btn-submit');
const btnCancel = document.getElementById('btn-cancel');

// Load users on page load
document.addEventListener('DOMContentLoaded', loadUsers);

// Form submit
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userData = {
        nome: nomeInput.value,
        email: emailInput.value,
        idade: parseInt(idadeInput.value)
    };
    
    const userId = userIdInput.value;
    
    if (userId) {
        // Update
        await updateUser(userId, userData);
    } else {
        // Create
        await createUser(userData);
    }
    
    resetForm();
    loadUsers();
});

// Cancel button
btnCancel.addEventListener('click', resetForm);

// Load all users
async function loadUsers() {
    loading.style.display = 'block';
    usersTable.style.display = 'none';
    noUsers.style.display = 'none';
    
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        
        loading.style.display = 'none';
        
        if (users.length === 0) {
            noUsers.style.display = 'block';
        } else {
            usersTable.style.display = 'table';
            renderUsers(users);
        }
    } catch (error) {
        loading.textContent = 'Erro ao carregar usuários';
        console.error('Error:', error);
    }
}

// Render users in table
function renderUsers(users) {
    usersList.innerHTML = users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>${user.idade}</td>
            <td class="actions">
                <button class="btn btn-edit" onclick="editUser(${user.id})">✏️ Editar</button>
                <button class="btn btn-delete" onclick="deleteUser(${user.id})">🗑️ Excluir</button>
            </td>
        </tr>
    `).join('');
}

// Create user
async function createUser(userData) {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        showMessage('Usuário criado com sucesso!');
    } catch (error) {
        console.error('Error:', error);
        showMessage('Erro ao criar usuário', true);
    }
}

// Edit user - load data into form
async function editUser(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const user = await response.json();
        
        userIdInput.value = user.id;
        nomeInput.value = user.nome;
        emailInput.value = user.email;
        idadeInput.value = user.idade;
        
        formTitle.textContent = 'Editar Usuário';
        btnSubmit.textContent = 'Atualizar';
        btnCancel.style.display = 'inline-block';
        
        nomeInput.focus();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Update user
async function updateUser(id, userData) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        showMessage('Usuário atualizado com sucesso!');
    } catch (error) {
        console.error('Error:', error);
        showMessage('Erro ao atualizar usuário', true);
    }
}

// Delete user
async function deleteUser(id) {
    if (!confirm('Tem certeza que deseja excluir este usuário?')) {
        return;
    }
    
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        showMessage('Usuário excluído com sucesso!');
        loadUsers();
    } catch (error) {
        console.error('Error:', error);
        showMessage('Erro ao excluir usuário', true);
    }
}

// Reset form
function resetForm() {
    form.reset();
    userIdInput.value = '';
    formTitle.textContent = 'Novo Usuário';
    btnSubmit.textContent = 'Criar';
    btnCancel.style.display = 'none';
}

// Show message
function showMessage(message, isError = false) {
    const msgDiv = document.createElement('div');
    msgDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${isError ? '#dc3545' : '#28a745'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: fadeIn 0.3s ease;
        z-index: 1000;
    `;
    msgDiv.textContent = message;
    document.body.appendChild(msgDiv);
    
    setTimeout(() => {
        msgDiv.remove();
    }, 3000);
}
