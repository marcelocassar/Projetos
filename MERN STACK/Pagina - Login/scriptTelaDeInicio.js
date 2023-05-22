let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#logado');

logado.innerHTML = `Olá ${userLogado.nome}`;

if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logada para acessar essa pagina.');
    window.location.href = 'Login.html';
}

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = 'Login.html';
}