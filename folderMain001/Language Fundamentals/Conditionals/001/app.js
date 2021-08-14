/***** Conditionals *****/

// Declaração das variáveis
var el1 = document.getElementById('box1');
var el2 = document.getElementById('box2');
var el3 = document.getElementById('box3');
var el4 = document.getElementById('box4');
var el5 = document.getElementById('box5');

// Função utilizando o operador condicional ternário
function myFunction() {
    var idade = document.getElementById('idade').value;
    var maioridade = idade < 18 ? 'Não apto' : 'Apto';
    document.getElementById('confirmacao').innerHTML =
        maioridade + ' para o voto';
}

// Treinando o switch-case
function goat() {
    var player = document.getElementById('player').value;

    switch (player) {
        case 'Coldzera':
            document.getElementById('print').innerHTML =
                'The Greatest Of All Time EVER';
            break;
        case 'NiKo':
            document.getElementById('print').innerHTML = 'Awesome Player';
            break;
        default:
            document.getElementById('print').innerHTML = 'None';
    }
}

// Utilizando a instrução condicional if
function verificarSalario() {
    var salario = document.getElementById('salario').value;
    var printSalario = document.getElementById('printSalario');

    if (salario <= 500) {
        printSalario.innerHTML = 'Você recebe até R$ 500,00';
    } else if (salario <= 800) {
        printSalario.innerHTML = 'Você recebe entre R$ 500,00 e 800,00';
    } else if (salario <= 1000) {
        printSalario.innerHTML = 'Você recebe entre R$ 800,00 e 1000,00';
    } else {
        printSalario.innerHTML = 'Você recebe acima do salário mínimo';
    }
}
