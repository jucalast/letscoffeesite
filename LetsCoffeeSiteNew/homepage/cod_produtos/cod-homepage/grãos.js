// Obtém elementos HTML usando seletores e armazena-os em variáveis
const container = document.querySelector('.container');
const cards = Array.from(document.querySelectorAll('.card'));
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const modal = document.getElementById('myModal');
const modalTitle = document.getElementById('modalTitle');
const modalDetails = document.getElementById('modalDetails');
const filterModal = document.getElementById('filterModal');
const applyFilterButton = document.querySelector('.modal-content1 button');
const filterButton = document.querySelector('.filter-button');
const closeModalButton = document.getElementById('closeModalButton');
const modalContent = document.querySelector('.modal-content');
const modalContentCarrinho = document.querySelector('.modal-content-carrinho');
const adicionar = document.querySelector('.adicionar');
const cardsWrapper = document.querySelector('.cards-wrapper');

// Suponhamos que você tenha uma lista de elementos de cartão Catuaí e Bourbon.
const cartoesCatuai = document.querySelectorAll('.cartao-catuaí');
const cartoesBourbon = document.querySelectorAll('.cartao-bourbon');

let currentCardID;

function resetCardStyles() {
  const cards = Array.from(document.querySelectorAll('.card'));

  cards.forEach((card) => {
    card.classList.remove('card-bourbon', 'card-guesha', 'card-catuaí');
    card.style.marginRight = 'initial';
    card.style.marginTop = 'initial';
    card.style.position = 'initial';
    card.style.right = 'initial';
    card.style.height = 'auto';
    card.style.top = 'initial';
  });
}

// Função para aplicar filtros automaticamente quando os checkboxes são selecionados
function applyFiltersAutomatically() {
  filterCards();
}

// Adicione eventos de clique para os checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('click', applyFiltersAutomatically);
});

// Abra o modal de filtro automaticamente ao carregar a página
openFilterModal();

// Define um evento de clique no botão "Adicionar" para exibir o modal de carrinho
adicionar.addEventListener('click', () => {
  addToCartFromModal();
  modalContentCarrinho.style.display = 'block';
});

// Define um evento de clique fora do modal para fechar o modal de carrinho
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modalContentCarrinho.style.display = 'none';
  }
});


// Função para filtrar os cartões com base nos filtros selecionados
function filterCards() {
  const selectedFilters = Array.from(filterModal.querySelectorAll('input:checked'));
  const selectedFilterValues = selectedFilters.map((filter) => filter.value);

  let filteredCount = 0;

  cards.forEach((card) => {
    const cardFilters = [
      card.getAttribute('data-filtro1'),
      card.getAttribute('data-filtro2'),
      card.getAttribute('data-filtro3')
    ];

    const isCardMatching = selectedFilterValues.every((filter) => cardFilters.includes(filter));

    // ...
if (isCardMatching) {
  card.style.display = 'block';
  card.classList.remove('filtered');
  filteredCount++;
} else {
  card.style.display = 'none';
  card.classList.add('filtered');
}
// ...

  });
}

// Função para exibir a frase com os filtros selecionados
function displayFilterText(selectedFilters) {
  const filterContainer = document.querySelector('.filter-container');
  const filterText = document.querySelector('.filter-text');

  if (selectedFilters.length > 0) {
    filterText.textContent = `esses são os grãos com filtro: ${selectedFilters.join(', ')}`;
    filterContainer.style.display = 'block';
  } else {
    filterText.textContent = '';
    filterContainer.style.display = 'none';
  }
}

// Adicione eventos de clique para os checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const selectedFilters = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);

    displayFilterText(selectedFilters);
    filterCards(); // Atualiza a exibição dos cards filtrados
  });
});


// Função para abrir o modal de filtro
function openFilterModal() {
  filterModal.style.display = 'block';
}

// Define eventos de clique para fechar o modal principal e o modal de carrinho
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Função para criar um cartão dinamicamente com base nas informações do cartão original
function createCardFromOriginal(card) {
  const cartProduct = document.createElement('div');
  cartProduct.classList.add('cart-product');

  const img = document.createElement('img');
  const imageOriginal = card.querySelector('.image-default');
  img.src = imageOriginal ? imageOriginal.src : '';
  img.alt = imageOriginal ? imageOriginal.alt : '';

  const productDetails = document.createElement('div');
  productDetails.classList.add('product-details');

  const h3 = document.createElement('h3');
  h3.textContent = card.getAttribute('data-title');

  const p = document.createElement('p');
  p.textContent = card.getAttribute('data-description');

  const input = document.createElement('input');
  input.type = 'number';
  input.value = 1;

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-product');
  removeButton.innerHTML = '×';

  removeButton.addEventListener('click', () => {
    cartProduct.style.opacity = '0';
    setTimeout(() => {
      cartProduct.remove();
    }, 300);
  });

  productDetails.appendChild(h3);
  productDetails.appendChild(p);
  productDetails.appendChild(input);
  cartProduct.appendChild(img);
  cartProduct.appendChild(productDetails);
  cartProduct.appendChild(removeButton);

  return cartProduct;
}

// Função para adicionar um produto ao carrinho com base no cartão original
function addToCartFromModal() {
  const cartProduct = createCardFromOriginal(document.querySelector(`[data-id="${currentCardID}"]`));

  const cartProductsContainer = document.querySelector('.cart-products');
  cartProductsContainer.appendChild(cartProduct);
}

// Define um evento de clique nos cartões para mostrar o modal
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    showModal(card);
  });
  card.setAttribute('data-index', index);
});

// Função para mostrar o modal com informações do cartão clicado
function showModal(card) {
  currentCardID = card.getAttribute('data-id');
  const title = card.getAttribute('data-title');
  const description = card.getAttribute('data-description');
  const filters = [
    card.getAttribute('data-filtro1'),
    card.getAttribute('data-filtro2'),
    card.getAttribute('data-filtro3')
  ];

  modalTitle.textContent = title;
  modalDetails.textContent = `Descrição: ${description}`;

  const modalFilters = document.getElementById('modalFilters');

  modalFilters.innerHTML = '';

  filters.forEach((filter) => {
    const filterElement = document.createElement('span');
    filterElement.textContent = filter;

    if (filter === 'catuaí') {
      filterElement.classList.add('catuaí-style');
    } else if (filter === 'bourbon') {
      filterElement.classList.add('bourbon-style');
    } else if (filter === 'guesha') {
      filterElement.classList.add('guesha-style');
    }

    modalFilters.appendChild(filterElement);
  });

  modal.style.display = 'block';
}

// Função para alternar o modo escuro
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}
