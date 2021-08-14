/***** Loops *****/

// Declaração de variáveis
var el1 = document.getElementById('box1');
var el2 = document.getElementById('box2');
var el3 = document.getElementById('box3');
var el4 = document.getElementById('box4');
var el5 = document.getElementById('box5');

// Trabalhando com o looping for
var numb = [456, 867, 2345, 234, 456];

for (i = 0; i < numb.length; i++) {
    el1.innerHTML += numb[i] + ' | ';
}

// Utilizando o looping for in / for of (em objetos/arrays)
var pessoa = {
    Nome: 'Lucas',
    Sobrenome: 'Macedo',
    Idade: '23 anos',
};

for (n in pessoa) {
    el2.innerHTML += n + ': ' + pessoa[n] + ' | ';
}

var arrayCar = ['Volkswagen', 'Chevrolet', 'Renault', 'Ford', 'Hyundai'];

for (var x of arrayCar) {
    el3.innerHTML += x + ' '; // Nessa situação, não é preciso colocar após o += "arrayCar[x]", porque ele já é acessado pela variável x
}

// Praticando com break e continue
var numbers = 10;

for (i = 0; i < numbers; i++) {
    if (i == 6) {
        break; // Aqui, quando o contador i=6, o loop será quebrado, ou seja, será exibido no console, os números de 0 à 5;
    }
    console.log(i);
}

var arrAnime = [
    'Naruto',
    'One Piece',
    'Shingeki no Kyojin',
    'Black Clover',
    'Boku no Hero Academia',
    'Death Note',
];

for (i = 0; i < arrAnime.length; i++) {
    if (i == 2) {
        continue; // Aqui, quando o contador i=2, que corresponde ao valor da array "Shingeki no Kyojin" será skipado
    }
    console.log(arrAnime[i]);
}
