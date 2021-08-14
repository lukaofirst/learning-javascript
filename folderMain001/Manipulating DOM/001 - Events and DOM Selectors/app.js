/***** EVENTOS NO JS, SELETORES DO DOM *****/

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

// Usando querySelectorAll()
for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontFamily = 'Takota';
    elements[i].style.fontSize = '50px';
}
