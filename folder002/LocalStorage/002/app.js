/***** sessionStorage e localStorage *****/

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
