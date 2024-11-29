// script.js

// Navegação Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função de Adicionar ao Carrinho
let carrinho = [];
document.querySelectorAll('.adicionar').forEach(button => {
    button.addEventListener('click', function() {
        const produtoNome = this.previousElementSibling.previousElementSibling.textContent;
        carrinho.push(produtoNome);
        alert(`${produtoNome} foi adicionado ao carrinho!`);
    });
});

// Exibir Carrinho no Console
function exibirCarrinho() {
    console.log("Itens no carrinho:", carrinho);
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'c') { // Pressione 'c' para ver o carrinho no console
        exibirCarrinho();
    }
});

// Validação do Formulário de Contato
function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
    alert("Mensagem enviada com sucesso!");
    return true;
}

// Evento de Submissão do Formulário de Contato
document.getElementById("formContato").addEventListener("submit", function(event) {
    if (!validarFormulario()) {
        event.preventDefault();
    }
});

// Função para mostrar a janela selecionada
function showWindow(windowId) {
    const windows = document.querySelectorAll('.window');
    windows.forEach(window => {
        window.classList.remove('active');
    });

    const activeWindow = document.getElementById(windowId);
    activeWindow.classList.add('active');
}