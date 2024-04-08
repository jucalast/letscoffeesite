var darkModeToggle = document.getElementById('darkModeToggle');
var body = document.body;

darkModeToggle.addEventListener('change', function () {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
    localStorage.setItem('darkMode', darkModeToggle.checked ? 'enabled' : 'disabled');

    // Adicione uma classe adicional ao aside quando o modo escuro estiver ativado
    var aside = document.getElementById('aside');
    aside.classList.toggle('dark-mode-aside', darkModeToggle.checked);
});

if (localStorage.getItem('darkMode') === 'enabled') {
    darkModeToggle.checked = true;
    body.classList.add('dark-mode');

    // Verifique se o modo escuro está ativado e adicione a classe adicional ao aside, se necessário
    var aside = document.getElementById('aside');
    if (aside) {
        aside.classList.add('dark-mode-aside');
    }
}
