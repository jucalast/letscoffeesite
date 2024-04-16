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

// Função para identificar a página atual e adicionar a classe 'active' ao link correspondente
function highlightCurrentPage() {
    var currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo da URL
    $("ul.list-unstyled li").removeClass("active"); // Remove a classe 'active' de todos os itens de menu
    $("ul.list-unstyled li a[href='" + currentPage + "']").parent().addClass("active"); // Adiciona a classe 'active' ao item de menu correspondente à página atual
}

$(document).ready(function() {
    highlightCurrentPage(); // Chama a função ao carregar a página
});

// Configurações do Dropzone.js
Dropzone.autoDiscover = false;

document.addEventListener('DOMContentLoaded', function() {
    var myDropzone = new Dropzone("#myDropzone", {
        url: "/file-upload",
        addRemoveLinks: true,
        dictRemoveFile: '',
        dictCancelUpload: 'Cancelar upload'
    });

    myDropzone.on("addedfile", function(file) {
        // Criar e adicionar o ícone "X" para cada imagem adicionada
        var deleteIcon = Dropzone.createElement('<span class="delete-icon">&times;</span>');
        file.previewElement.appendChild(deleteIcon);

        // Adicionar um evento de clique para o ícone "X"
        deleteIcon.addEventListener('click', function() {
            // Remover a imagem quando o ícone "X" é clicado
            myDropzone.removeFile(file);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var customFieldsCounter = 0;

    document.getElementById('addcustomfield').addEventListener('click', function() {
        customFieldsCounter++;

        var customField = document.createElement('div');
        customField.className = 'form-group custom-field';
        customField.innerHTML = `
            <div>
            <div class="remove">
                <label for="customfield${customFieldsCounter}">campo personalizado ${customFieldsCounter}</label>
                <button type="button" class="btn btn-danger remove-custom-field">-</button>
                </div>
                <input type="text" class="form-control" id="customfield${customFieldsCounter}" placeholder="digite o valor do campo personalizado">
                
            </div>
        `;

        document.querySelector('.formulario form').insertBefore(customField, document.getElementById('addcustomfield'));
    });

    document.getElementById('productcategory').addEventListener('keydown', function(e) {
        // Verifica se a tecla pressionada foi Enter
        if (e.key === 'Enter') {
            e.preventDefault();

            // Cria uma nova tag de categoria
            var categoryTag = document.createElement('span');
            categoryTag.className = 'category-tag';
            categoryTag.textContent = this.value;

            // Adiciona a tag de categoria ao DOM
            document.getElementById('categorytags').appendChild(categoryTag);

            // Limpa o campo de entrada
            this.value = '';
        }
    });

    // Evento de clique para remover o campo personalizado
    document.querySelector('.formulario form').addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-custom-field')) {
            // Remove todo o grupo de campo personalizado
            e.target.parentElement.parentElement.remove();
        }
    });
});
