/*** DIFERENÇAS ENTRE SLICE - SUBSTRING - SUBSTR, ENTENDENDO AS FLAGS i,g, MÉTODOS DE STRINGS ***/

// Entendendo a diferença entre slice, substring e substr
var x = 'Desenvolvedor Front-End'; //String comum
var y = x.slice(-3) + ' (slice method)'; //Admite valores negativos e retorna a parte cortada em uma nova string
var z = x.substring(20) + ' (substring method)'; //Não admite valores negativos e retorna a parte cortada em uma nova string
var j = x.substr(3, 10) + ' (substr method)'; //Começa com um parâmetro de início e termina com o tamanho da string que será recortado (melhor método é esse, na minha opinião);

document.getElementById('box1').innerHTML =
    x + '<br>' + y + '<br>' + z + '<br>' + j;

// Entendendo as flags i, g
function OnClick() {
    var cs = document.getElementById('box2').innerHTML; // É necessario a declaração do innerHTML da box3 para que seja feita a verificação do replace
    var cs_replace = cs.replace(/COUNTER-STRIKE/gi, 'Coldzera'); // a flag /ig retira o case sensitive e substitui todas as correspondências que sejam counter-strike
    document.getElementById('box2').innerHTML = cs_replace;
}

// Métodos de String

// .concat()
var lu = 'Lucas';
var ma = 'Macedo';

console.log(lu.concat(' ' + ma) + ' ' + '(concat method)');

// .padStart(), .padEnd()
var codigos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

for (i = 0; i < codigos.length; i++) {
    console.log(codigos[i].padStart(4, 0));
}

// .split()

var string = 'Computador Desktop';
var arr = string.split('');
var row = '';

for (i = 0; i < arr.length; i++) {
    row += arr[i] + '<br>';
}

document.getElementById('box4').innerHTML = row;
