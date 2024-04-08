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

if (localStorage.getItem('darkMode') === 'enabled') {
    darkModeToggle.checked = true;
    body.classList.add('dark-mode');
    modoEscuro.forEach(function (element) {
      element.classList.add('dark-mode-element');
    });
}
