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

  if (localStorage.getItem('darkMode') === 'enabled') {
      darkModeToggle.checked = true;
      body.classList.add('dark-mode');
      modoEscuro.forEach(function (element) {
        element.classList.add('dark-mode-element');
      });
  }
});

document.getElementById('toggle-btn').addEventListener('click', function() {
  var menu = document.querySelector('ul');
  var currentDisplay = getComputedStyle(menu).display;

  if (currentDisplay === 'none') {
      // Mostrar o menu e restaurar o valor original do display
      menu.style.display = menu.dataset.originalDisplay || 'block';
  } else {
      // Esconder o menu e armazenar o valor original do display
      menu.dataset.originalDisplay = currentDisplay;
      menu.style.display = 'none';
  }
});
