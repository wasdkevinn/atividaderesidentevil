const body = document.body;
const btnMode = document.getElementById('toggle-mode');
const btnFlashlight = document.getElementById('toggle-flashlight');

// Atualiza as coordenadas da lanterna conforme o mouse se move
document.addEventListener('mousemove', (event) => {
    if (body.classList.contains('dark-mode') && body.classList.contains('flashlight-active')) {
        // Usa clientX e clientY para pegar a posição em relação à tela visível
        const x = event.clientX + 'px';
        const y = event.clientY + 'px';
        
        body.style.setProperty('--mouse-x', x);
        body.style.setProperty('--mouse-y', y);
    }
});

// Modo Claro / Escuro
btnMode.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        // Desativa o modo escuro e desliga a lanterna automaticamente
        body.classList.remove('dark-mode');
        body.classList.remove('flashlight-active');
        
        btnMode.textContent = 'Alternar para Modo Escuro';
        btnFlashlight.style.display = 'none'; // Esconde o botão da lanterna no modo claro
    } else {
        // Reativa o modo escuro e liga a lanterna por padrão
        body.classList.add('dark-mode');
        body.classList.add('flashlight-active');
        
        btnMode.textContent = 'Alternar para Modo Claro';
        btnFlashlight.textContent = 'Desligar Lanterna';
        btnFlashlight.style.display = 'inline-block';
    }
});

// Botão de Tirar Apenas a Lanterna
btnFlashlight.addEventListener('click', () => {
    if (body.classList.contains('flashlight-active')) {
        body.classList.remove('flashlight-active');
        btnFlashlight.textContent = 'Ligar Lanterna';
        
        // Limpa as variáveis do mouse para evitar conflitos
        body.style.removeProperty('--mouse-x');
        body.style.removeProperty('--mouse-y');
    } else {
        body.classList.add('flashlight-active');
        btnFlashlight.textContent = 'Desligar Lanterna';
    }
});



const frasesRE = [
    "Você entrou no mundo do survival horror...",
    "Cuidado: Raccoon City está isolada.",
    "Gire a manivela para abrir a porta hidráulica.",
    "Itens limitados. Pense bem antes de coletar.",
    "O Nemesis está perseguindo os membros dos S.T.A.R.S.",
    "Não desperdice munição de escopeta com zumbis comuns.",
    "A Umbrella Corporation está de olho em você."
];

function atualizarMensagem() {
    const elemento = document.getElementById('caixa-mensagem');
    if (elemento) {
        // Sorteia uma frase da lista
        const fraseSorteada = frasesRE[Math.floor(Math.random() * frasesRE.length)];
        elemento.textContent = `"${fraseSorteada}"`;
    }
}
// Ao abrir
atualizarMensagem();
// Muda a frase a cada 8 segundos
setInterval(atualizarMensagem, 8000);

