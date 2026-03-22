// ====== MODO ESCURO ======
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 1. Função para carregar o tema e o texto do botão assim que a página abre
function carregarTema() {
    const temaSalvo = localStorage.getItem('meuTema');

    if (temaSalvo === 'escuro') {
        body.classList.add('dark-mode');
        // Se a página atual tem o botão, atualiza o texto dele
        if (themeToggleBtn) {
            themeToggleBtn.textContent = '☀️ Modo Claro';
        }
    } else {
        // Se for claro, garante que o botão mostre o texto certo
        if (themeToggleBtn) {
            themeToggleBtn.textContent = '🌙 Modo Escuro';
        }
    }
}

// 2. Executa a função imediatamente
carregarTema();

// 3. Evento de clique (só funciona nas páginas que têm o botão)
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Verifica qual modo ficou ativo para salvar na memória e trocar o texto
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('meuTema', 'escuro');
            themeToggleBtn.textContent = '☀️ Modo Claro';
        } else {
            localStorage.setItem('meuTema', 'claro');
            themeToggleBtn.textContent = '🌙 Modo Escuro';
        }
    });
}

// ====== VALIDAÇÃO DO FORMULÁRIO ======
const form = document.getElementById('contactForm');
const modal = document.getElementById('modalSucesso');
const btnFecharModal = document.getElementById('fecharModal');

// Só executa a validação se estiver na página de contato (onde o form existe)
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede a página de recarregar

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }


        const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
        if (!regexNome.test(nome)) {
            alert('O campo NOME não pode conter números ou símbolos especiais.');
            return; // Para a execução aqui
        }

        // Formato de e-mail válido
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert('Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).');
            return;
        }

        // Se passou por todas as regras, mostra a caixa de sucesso!
        modal.style.display = 'flex';
        form.reset(); // Limpa o formulário
    });
}

// Fechar a modal
if (btnFecharModal) {
    btnFecharModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}