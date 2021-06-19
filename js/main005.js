/*** USANDO OS MÉTODOS .sort() - .reverse(), ENCONTRANDO O VALOR MÁXIMO E MÍNIMO DE UM ARRAY, ORDENANDO ITENS DO ARRAY ***/

// Declarando as variáveis
var el1 = document.getElementById('box1');
var el2 = document.getElementById('box2');
var el3 = document.getElementById('box3');
var el4 = document.getElementById('box4');
var el5 = document.getElementById('box5');
var el6 = document.getElementById('box6');
var el7 = document.getElementById('box7');

// Brincando com os métodos sort() e reverse()
var text = [
    'Faze Clan',
    'Furia',
    'Astralis',
    'MIBR',
    'Godsent',
    'Vitality',
    'Team Liquid',
    'mousesports',
    'G2',
];
el1.innerHTML = text.sort().join(' | ');
el2.innerHTML = text.reverse().join(' - ');

// Encontrando o valor máximo e mínimo de um array

var num = [50, 10, 20, 38, 67, 349, 523, 1000];
var num2 = [345, 123, 567, 234, 1024, 5785];

/* 1ª Forma: Usando sort() */
var numMin = num.sort(function (a, b) {
    return a - b;
}); // OU var numMax = num.sort(function(a,b){return b-a});

el3.innerHTML = num[0] + ' ' + num[num.length - 1];

/* 2ª Forma: Criando uma função myArray retornando usando o método Math.max.apply(null,arr) ou Math.min.apply(null,arr) */
el4.innerHTML =
    'O maior número da array num é: ' +
    myArrayMax(num) +
    ' || ' +
    'O menor número da array num é: ' +
    myArrayMin(num);

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

/* 3ª Forma: O jeito tradicional: Usando uma função com while e if */
function minhaArrayMax(arr) {
    var len = num2.length;
    var max = -Infinity;
    while (len--) {
        if (num2[len] > max) {
            max = num2[len];
        }
    }
    return max;
}

el5.innerHTML = minhaArrayMax(num2);

function minhaArrayMin(arr) {
    var len = num2.length;
    var min = Infinity;
    while (len--) {
        if (num2[len] < min) {
            min = num2[len];
        }
    }
    return min;
}

el6.innerHTML = minhaArrayMin(num2);

// Ordenando objetos em arrays
var carros = [
    { modelo: 'Polo', ano: '2019' },
    { modelo: 'Gol', ano: '2017' },
    { modelo: 'T-Cross', ano: '2021' },
    { modelo: 'Fox', ano: '2014' },
];

displayCars();

function myFunction() {
    carros.sort(function (a, b) {
        return a.ano - b.ano;
    });
    displayCars();
}

function displayCars() {
    el7.innerHTML =
        'Clique nesta div!' +
        ' - ' +
        'Ficará em ordem crescente (ano): ' +
        carros[0].modelo +
        ' ' +
        carros[0].ano +
        ' | ' +
        carros[1].modelo +
        ' ' +
        carros[1].ano +
        ' | ' +
        carros[2].modelo +
        ' ' +
        carros[2].ano +
        ' | ' +
        carros[3].modelo +
        ' ' +
        carros[3].ano;
}
