/*** Métodos de String - .test(), .exec(), .match() ***/

// Declaração de variáveis
var el1 = document.getElementById('box1');
var el2 = document.getElementById('box2');
var el3 = document.getElementById('box3');
var el4 = document.getElementById('box4');
var el5 = document.getElementById('box5');

// Encontrando padrões em uma string usando .test()
/* .test() com base no pattern, ele irá verificar se ele é verdade em uma string e irá retornar se é true ou false */

var str = 'Counter-Strike: Global Offensive';
var pattern = /o/gi;

var result1 = pattern.test(str);

el1.innerHTML = str + ' | ' + pattern + ' | ' + result1;

// Utilizando o método .exec()
/* .exec() verifica se há ou não correspondência com entre o pattern e a string, e retorna o result como objeto, sendo possível acessar o .index ou .input  */

var patt = /Offensive/gi;
var result2 = patt.exec(str);

el1.innerHTML =
    el1.innerHTML +
    '<br><br>' +
    'Foi encontrado o pattern: ' +
    result2 +
    ', na posição ' +
    result2.index +
    ' com a entrada: ' +
    result2.input;

// Utilizando o método .match()
/* .match() procura todas as correspondências em uma string, e os exibe caso queira esses valores */

var text = 'Coldzera is the coldest man on CSGO';
var patt1 = /cold/gi;
var result3 = text.match(patt1);

el2.innerHTML = text + ' | ' + patt1 + ' | ' + result3;
