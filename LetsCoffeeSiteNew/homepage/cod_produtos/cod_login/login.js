function authenticateUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Defina os logins e senhas pré-definidos
    var clienteLogin = 'cliente';
    var clienteSenha = 'senha_cliente';
    var comercianteLogin = 'comerciante';
    var comercianteSenha = 'senha_comerciante';
  
    if (username === clienteLogin && password === clienteSenha) {
        window.location.href = 'index.html'; // Redireciona para a interface do cliente
    } else if (username === comercianteLogin && password === comercianteSenha) {
        window.location.href = 'LetsCoffeeSiteNew\homepage\cod_gerenciamento\dashboard.html'; // Redireciona para a interface do comerciante
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
  }

  
  document.addEventListener('DOMContentLoaded', function () {
    var darkModeToggle = document.getElementById('darkModeToggle');
    var body = document.body;
    var modoEscuro = document.querySelectorAll('.logo');

    darkModeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode', darkModeToggle.checked);

        modoEscuro.forEach(function(element) {
            element.classList.toggle('darkModeToggle', darkModeToggle.checked);
        });

        localStorage.setItem('darkMode', darkModeToggle.checked ? 'enabled' : 'disabled');
    });

    // Verificar se o modo escuro está ativado em outras páginas
    var modoEscuroAtivado = localStorage.getItem('darkMode') === 'enabled';
    if (modoEscuroAtivado) {
        darkModeToggle.checked = true;
        body.classList.add('dark-mode');
        modoEscuro.forEach(function (element) {
            element.classList.add('dark-mode-element');
        });
    }
});
