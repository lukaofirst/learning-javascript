/***** Math Methods *****/

// Declarando as variáveis
var el1 = document.getElementById('box1');
var el2 = document.getElementById('box2');
var el3 = document.getElementById('box3');
var el4 = document.getElementById('box4');
var el5 = document.getElementById('box5');

// Manipulando dados matemáticos com .ceil() .floor() .round() .random() .sqrt() .cbrt()
var num1 = 8.7897;
var num2 = 8.4678;
var num3 = 64;

el1.innerHTML = Math.PI.toFixed(2) + ' | ' + Math.round(3.45968); // Não é possível arredondar porque é trata-se de uma constante do Javascript
el2.innerHTML = Math.ceil(num1) + ' | ' + Math.floor(num2);
el3.innerHTML = Math.sqrt(num3) + ' | ' + Math.cbrt(num3);

// Função que gera valores aleatórios, sendo atribuidos dois parâmetros
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
