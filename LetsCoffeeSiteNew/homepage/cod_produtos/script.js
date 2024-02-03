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


document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.getElementById('scroll-container');
  const productCards = document.querySelectorAll('.product-card');
  let currentIndex = 0;
  let intervalId;

  function updateCarousel() {
    const cardWidthWithGap = productCards[0].offsetWidth;
    const containerWidth = scrollContainer.offsetWidth;
    const centerPosition = containerWidth / 4;

    const factor = 0.0;
    const newPosition = centerPosition - (currentIndex * cardWidthWithGap + cardWidthWithGap / 2) * factor;

    productCards.forEach((card, index) => {
      card.style.transition = 'none';
      card.style.transform = `translateX(${newPosition}px)`;
    });

    void scrollContainer.offsetWidth;

    productCards.forEach((card, index) => {
      card.style.transition = 'transform 1s ease-in-out';
    });

    scrollContainer.style.width = `${productCards.length * cardWidthWithGap + containerWidth}px`;

    scrollContainer.scrollLeft = currentIndex * cardWidthWithGap;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % productCards.length;
    updateCarousel();
  }

  function pauseCarousel() {
    clearInterval(intervalId);
  }

  intervalId = setInterval(nextSlide, 1000);

  productCards.forEach(card => {
    card.addEventListener('click', pauseCarousel);
  });

  let isMouseDown = false;
  let startX;
  let scrollLeftOnMouseDown;

  let touchStartX;
  let touchStartY;

  scrollContainer.addEventListener('mousedown', handleStart);
  scrollContainer.addEventListener('touchstart', handleTouchStart);

  scrollContainer.addEventListener('mouseleave', handleEnd);
  scrollContainer.addEventListener('mouseup', handleEnd);
  scrollContainer.addEventListener('touchend', handleTouchEnd);

  scrollContainer.addEventListener('mousemove', handleMove);
  scrollContainer.addEventListener('touchmove', handleTouchMove);

  function handleStart(e) {
    isMouseDown = true;
    startX = getTouchX(e);
    scrollLeftOnMouseDown = scrollContainer.scrollLeft;
  }

  function handleTouchStart(e) {
    touchStartX = e.touches[0].pageX;
    touchStartY = e.touches[0].pageY;
  }

  function handleEnd() {
    isMouseDown = false;
  }

  function handleTouchEnd() {
   
  }

  function handleMove(e) {
    if (!isMouseDown) return;
    e.preventDefault();

    const x = getTouchX(e);
    const walk = (x - startX);
    const newScrollLeft = scrollLeftOnMouseDown - walk;

    if (newScrollLeft >= 0 && newScrollLeft <= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
      scrollContainer.scrollLeft = newScrollLeft;
    }
  }

  function handleTouchMove(e) {
    const deltaX = Math.abs(e.touches[0].pageX - touchStartX);
    const deltaY = Math.abs(e.touches[0].pageY - touchStartY);

    if (deltaY > deltaX) {
      return;
    }

    e.preventDefault();

    const x = getTouchX(e);
    const walk = (x - touchStartX);
    const newScrollLeft = scrollLeftOnMouseDown - walk;

    if (newScrollLeft >= 0 && newScrollLeft <= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
      scrollContainer.scrollLeft = newScrollLeft;
    }
  }

  function getTouchX(e) {
    if (e.touches && e.touches.length > 0) {
      return e.touches[0].pageX - scrollContainer.offsetLeft;
    }
    return e.pageX - scrollContainer.offsetLeft;
  }
});

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
      window.location.href = 'area_comerciante.html'; // Redireciona para a interface do comerciante
  } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
  }
}
