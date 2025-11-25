// Configuração da API
const API_URL = 'http://localhost:3011/api';
const API_URLR = 'https://grupo11projeto20252.escolatecnicaadelia.info/api';

// Funções de autenticação
function login(email, senha) {
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Email ou senha inválidos');
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
    });
}

function cadastrarUsuario(userData) {
    return fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário');
        }
        return response.json();
    });
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}

function getUsuarioLogado() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

function verificarAutenticacao() {
    const user = getUsuarioLogado();
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    return user;
}

// Funções de medicamentos
function listarMedicamentos(categoria = null) {
    const url = categoria ? `${API_URL}/Medicamentos?categoria=${categoria}` : `${API_URL}/Medicamentos`;

    return fetch(url)
        .then(response => response.json());
}

function cadastrarMedicamento(medicamentoData) {
    return fetch(`${API_URL}/Medicamentos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicamentoData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar medicamento');
        }
        return response.json();
    });
}

// Funções de solicitações
function listarSolicitacoes() {
    return fetch(`${API_URL}/solicitacoes`)
        .then(response => response.json());
}

function criarSolicitacao(solicitacaoData) {
    return fetch(`${API_URL}/solicitacoes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(solicitacaoData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao criar solicitação');
        }
        return response.json();
    });
}

// Funções auxiliares
function formatarData(timestamp) {
    if (!timestamp) return 'N/A';
    const data = new Date(timestamp);
    return data.toLocaleDateString('pt-BR');
}

function mostrarMensagem(mensagem, tipo = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${tipo}`;
    alertDiv.textContent = mensagem;

    const container = document.querySelector('.container') || document.body;
    container.insertBefore(alertDiv, container.firstChild);

    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}
