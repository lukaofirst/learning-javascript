/*** EVENTOS NO JS, SELETORES DO DOM, LOCAL E SESSIONSTORAGE, NOTIFICAÇÕES USANDO PUSH.JS ***/

// Declaração de variáveis
var el = document.getElementById('h2');
var elements = document.querySelectorAll('h4');

// Funções para os eventos: onmouseover, onmouseout e window.onload
function enterMessage() {
    alert('Oi, você passou o mouse por cima do h1');
}

function outMessage() {
    alert('Então, você saiu do h1 :|');
}

window.onload = function () {
    el.innerHTML = el.innerHTML + 'Lucas, ' + 'tudo bem?';
    el.style.fontFamily = 'Open Sans Light';
};

// Usando querySelectoAll()
for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = 'Takota';
    elements[i].style.fontSize = '50px';
}

// Usando sessionStorage e localStorage
// SESSION STORAGE permite armazena durante uma sessão um valor/chave dentro de um navegador, caso você feche o navegador, o valor será excluído
// LOCAL STORAGE permite armazenas um dado por tempo indefinido dentro de um navegador. Não adianta fechar e abrir, pois o dado não será excluído
// Caso você queira limpar TUDO em SESSION e LOCAL, deverá escrever após a função, respectivamente, sessionStorage.clear() e localStorage.clear();

if (typeof Storage !== undefined) {
    alert('O navegador possui suporte para Storage');
    initialize();
} else {
    alert('Seu navegador é uma versão muito antiga, atualize-o');
}

function initialize() {
    if (sessionStorage.getItem('nome') !== null) {
        alert(
            'Oi ' +
                sessionStorage.nome +
                ', seja muito bem-vindo(a). Em que posso te ajudar?'
        );
    } else {
        alert('Bem-vindo, esta é sua primeira visita');
        sessionStorage.nome = 'Lucas';
    }
}

function clickCounter() {
    if (typeof Storage !== 'undefined') {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 0;
        }
        document.getElementById('result').innerHTML =
            'Você clicou no botão ' + localStorage.clickcount + ' vez(es).';
    } else {
        document.getElementById('result').innerHTML =
            'Desculpe, seu navegador não suporta armazenamento web...';
    }
    // localStorage.clear(); irá limpar o localStorage
}

// Criando notificações usando Push.js
if (Push.Permission.get() != 'granted') {
    Push.Permission.request();
}

Push.create('Seja bem-vindo', {
    body: 'Você recebeu uma notificação',
    icon: 'https://image.freepik.com/fotos-gratis/bela-foto-da-ponte-golden-gate-com-incrivel-ceu-azul-claro_181624-1777.jpg',
    timeout: 4000,
    onClick: function () {
        window.location.href = 'https://www.google.com.br';
    },
});
