if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logada para acessar essa pagina.');
    window.location.href = 'Login.html';
}

function sair() {
    localStorage.removeItem('token');
    window.location.href = 'Login.html';
}