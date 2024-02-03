/*// Obtém elementos HTML usando seletores e armazena-os em variáveis
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
const cartProductsContainer = document.querySelector('.cart-products');

let currentCardID;

// Suponhamos que você tenha uma lista de elementos de cartão Catuaí e Bourbon.
const cartoesCatuai = document.querySelectorAll('.cartao-catuaí');
const cartoesBourbon = document.querySelectorAll('.cartao-bourbon');

// Função para redefinir estilos dos cards
function resetCardStyles() {
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
adicionar.addEventListener('click', addToCartFromModal);

window.addEventListener('click', (event) => {
  if (event.target === modal || event.target === modalContentCarrinho) {
    closeModals();
  }
});

// Função para filtrar os cartões com base nos filtros selecionados
function filterCards() {
  const selectedFilters = Array.from(filterModal.querySelectorAll('input:checked'))
    .map((filter) => filter.value);

  cards.forEach((card) => {
    const cardFilters = [
      card.getAttribute('data-filtro1'),
      card.getAttribute('data-filtro2'),
      card.getAttribute('data-filtro3')
    ];

    const isCardMatching = selectedFilters.every((filter) => cardFilters.includes(filter));

    // Exibe ou oculta os cards com base nos filtros selecionados
    card.style.display = isCardMatching ? 'block' : 'none';
  });
}



// Função para abrir o modal de filtro
function openFilterModal() {
  filterModal.style.display = 'block';
}

// Função para fechar ambos os modais
function closeModals() {
  modal.style.display = 'none';
  modalContentCarrinho.style.display = 'none';
  modalContent.style.display = 'block'; // Adiciona esta linha para reabrir o modal principal
}
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
  cartProductsContainer.appendChild(cartProduct);

  // Abre o modal de carrinho e fecha o modal principal
  modalContent.style.display = 'none';
  modalContentCarrinho.style.display = 'block';
}

// Define um evento de clique nos cartões para mostrar o modal
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    showModal(card);
  });
  card.setAttribute('data-index', index);
});

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

    // Abre o modal principal e fecha o modal de carrinho
    modal.style.display = 'block';
    modalContentCarrinho.style.display = 'none';
  }*/


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

function toggleCategories() {
  const options = document.getElementById('filter-options');
  if (options) {
      options.style.display = options.style.display === 'none' ? 'block' : 'none';
  }
}

function toggleFilter(filterType) {
  const options = document.getElementById(`${filterType}-options`);
  if (options) {
      options.style.display = options.style.display === 'none' ? 'block' : 'none';
  }

}

function filterCards() {
  // Obter todos os checkboxes selecionados de variedade
  var variedadeCheckboxes = document.querySelectorAll('#variedade-options input[type="checkbox"]:checked');
  var variedadeFilters = Array.from(variedadeCheckboxes).map(checkbox => checkbox.id.replace('variedade_checkbox_', ''));

  // Obter todos os checkboxes selecionados de preço
  var precoCheckboxes = document.querySelectorAll('#preco-options input[type="checkbox"]:checked');
  var precoFilters = Array.from(precoCheckboxes).map(checkbox => checkbox.id.replace('preco_checkbox_', ''));

  // Verificar se nenhum checkbox está selecionado
  if (variedadeFilters.length === 0 && precoFilters.length === 0) {
      // Nenhum filtro selecionado, restaurar estilização original
      var cards = document.querySelectorAll('.card');
      cards.forEach(card => {
          card.classList.remove('hidden', 'visible');
      });
      return; // Sai da função para evitar a aplicação indevida de estilos
  }

  // Exibir todos os cards
  var cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.classList.remove('visible');
      card.classList.add('hidden');
  });

  // Aplicar filtro de variedade
  if (variedadeFilters.length > 0) {
      cards.forEach(card => {
          var variedade = card.getAttribute('data-filtro1');
          if (variedadeFilters.includes(variedade)) {
              card.classList.remove('hidden');
              card.classList.add('visible');
          }
      });
  }

  // Aplicar filtro de preço
  if (precoFilters.length > 0) {
      cards.forEach(card => {
          var preco = card.getAttribute('data-preco');
          if (precoFilters.includes(preco)) {
              card.classList.remove('hidden');
              card.classList.add('visible');
          }
      });
  }
}

   // Adicionar evento de clique a todos os cards
   var cards = document.querySelectorAll('.card');
   cards.forEach(function (card) {
       card.addEventListener('click', function () {
           openModal(card);
       });
   });

// Função para abrir o modal com as informações do card clicado
function openModal(card) {
  var modal = document.getElementById('myModal');
  var modalContent = document.getElementById('modalContent');
  var modalTitle = document.getElementById('modalTitle');
  var modalDetails = document.getElementById('modalDetails');
  var modalFilters = document.getElementById('modalFilters');
  var imgSelect = document.querySelector('.imgselect');
  var largerImageContainer = document.querySelector('.largerImageContainer');

  // Configurar as informações do modal com base no card clicado
  modalTitle.textContent = card.getAttribute('data-title');
  modalDetails.textContent = card.getAttribute('data-description');

  // Limpando o conteúdo anterior do modalFilters
  modalFilters.innerHTML = '';

  // Adicionar filtros ao modalFilters
  var filters = ['filtro1', 'filtro2', 'filtro3'];
  filters.forEach(function (filtro) {
    var filtroValue = card.getAttribute('data-' + filtro);
    if (filtroValue) {
      var filtroElement = document.createElement('div');
      filtroElement.textContent = 'Filtro ' + filtro.replace('filtro', '') + ': ' + filtroValue;
      modalFilters.appendChild(filtroElement);
    }
  });

  // Limpar o conteúdo anterior de imgSelect e largerImageContainer
  imgSelect.innerHTML = '';
  largerImageContainer.innerHTML = '';

  // Adicionar imagens ao imgSelect apenas se o card clicado for o primeiro
  if (card.getAttribute('data-id') === '1') {
    var imagePaths = [
      'media/121376535_390039392022733_1628705492367631483_n.jpg',
      'media/279005299_3836437939814210_692940873935983022_n.jpg',
      'media/pão de banana.png'
    ];

    // Adicionar cada imagem ao imgSelect
    imagePaths.forEach(function (path, index) {
      var image = document.createElement('img');
      image.src = path;
      image.alt = 'Imagem do Produto no Modal';
      image.classList.add('image-modal');

      // Adicionar evento de clique para substituir a imagem maior
      image.addEventListener('click', function () {
        updateLargerImage(path);
      });

      imgSelect.appendChild(image);
    });

    // Adicionar a imagem maior inicial
    updateLargerImage(imagePaths[0]);
  }

  // Abrir o modal
  modal.style.display = 'block';

  // Adicionando um evento de clique para fechar o modal ao clicar no botão "X"
  var closeModalButton = document.getElementById('closeModalButton');
  closeModalButton.onclick = function () {
    modal.style.display = 'none';
  };

  // Adicionando um evento de clique para fechar o modal ao clicar fora dele
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // Função para atualizar a imagem maior
  function updateLargerImage(imagePath) {
    var largerImage = document.createElement('img');
    largerImage.src = imagePath;
    largerImage.alt = 'Imagem Maior';
    largerImage.classList.add('largerImage');
    largerImageContainer.innerHTML = '';
    largerImageContainer.appendChild(largerImage);
  }
}

function displayFilterText(selectedFilters) {
  const filterContainer = document.querySelector('.filter-container');
  const filterText = document.querySelector('.filter-text');

  const filterNames = {
    guesha: 'guesha',
    catuai: 'catuaí',
    bourbon: 'bourbon',
    low: 'baixo',
    medium: 'médio',
    high: 'alto'
    // Adicione mais conforme necessário
  };

  const displayedFilters = selectedFilters.map(filter => {
    const filterName = filterNames[filter] || filter;
    return `<span class="filter-name ${filter}-filter">${filterName}</span>`;
  });

  filterText.innerHTML = displayedFilters.length > 0
    ? `filtros aplicados: ${displayedFilters.join('')}` : ' ';

  filterContainer.style.display = displayedFilters.length > 0 ? 'block' : 'none';
}

document.querySelectorAll('#variedade-options input[type="checkbox"], #preco-options input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const selectedFilters = Array.from(document.querySelectorAll('#variedade-options input[type="checkbox"]:checked, #preco-options input[type="checkbox"]:checked'))
      .map((checkbox) => checkbox.id.replace('variedade_checkbox_', '').replace('preco_checkbox_', ''));
    
    displayFilterText(selectedFilters);
    filterCards();
  });
});

