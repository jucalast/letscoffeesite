// Obtém os elementos do HTML
const cardsWrapper = document.querySelector('.cards-wrapper');
const cards = Array.from(document.querySelectorAll('.card'));
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-rigth');
const modal = document.getElementById("myModal");

// Define o índice do card atual
let currentIndex = 0;

// Adiciona os ouvintes de eventos para as setas
arrowLeft.addEventListener('click', () => navigateCards(-1));
arrowRight.addEventListener('click', () => navigateCards(1));

// Função para navegar entre os cards
function navigateCards(direction) {
  // Calcula o próximo índice
  currentIndex += direction;

  // Verifica se o próximo índice está dentro dos limites dos cards
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  } else if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  // Calcula a distância para mover o wrapper dos cards
  const cardWidth = cards[0].offsetWidth;
  const distanceToMove = -currentIndex * cardWidth;

  // Aplica a transformação para mover o wrapper dos cards
  cardsWrapper.style.transform = `translateX(${distanceToMove}px)`;

  // Adiciona a classe 'current-iten' ao card atual
  cards.forEach((card) => card.classList.remove('current-iten'));
  cards[currentIndex].classList.add('current-iten');
}

// Função para resetar a posição dos cards ao aplicar filtros
function resetCardPosition() {
  currentIndex = 0;
  const cardWidth = cards[0].offsetWidth;
  const distanceToMove = -currentIndex * cardWidth;
  cardsWrapper.style.transform = `translateX(${distanceToMove}px)`;
  cards.forEach((card) => card.classList.remove('current-iten'));
  cards[currentIndex].classList.add('current-iten');
}

// Abre o modal quando um card for clicado
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    if (index === currentIndex) {
      resetCardPosition();
      modal.style.display = 'block';
    }
  });
});

// Fecha o modal quando o usuário clica no botão de fechar
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha o modal quando o usuário clica fora do modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Restante do seu código JavaScript...

// Obtém os elementos do HTML
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Função para alternar o modo escuro
function toggleDarkMode() {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    // Salva a preferência do usuário no armazenamento local
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    // Remove a preferência do usuário do armazenamento local
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Verifica a preferência do usuário no armazenamento local ao carregar a página
if (localStorage.getItem('darkMode') === 'enabled') {
  darkModeToggle.checked = true;
  body.classList.add('dark-mode');
}

// Adiciona o evento de mudança ao botão de modo escuro
darkModeToggle.addEventListener('change', toggleDarkMode);

// Obtém a imagem do cabeçalho
const logoImg = document.querySelector('header img');

// Função para retornar à página inicial
function returnToHomePage() {
  window.location.href = 'index.html'; // Substitua 'index.html' com o caminho correto da sua página inicial
}

// Adiciona o evento de clique à imagem do cabeçalho
logoImg.addEventListener('click', returnToHomePage);

