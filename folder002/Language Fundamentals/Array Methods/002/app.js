/***** Array Methods *****/

// Manipulando o index dos itens do array

var carros = ['Volkswagen', 'Chevrolet', 'Hyundai', 'Fiat'];

console.log(carros[2]); // Acessando o elemento de index 2 da array
var fcarros = carros[0]; // Acessando o primeiro elemento da array
var lcarros = carros[carros.length - 1]; // Acessando o último elemento da array

console.log(fcarros + ' | ' + lcarros);

// Trabalhando com loop's em arrays

/* 1ª Forma: utilizando o loop for */
var frutas, text, fLen, i;
frutas = ['Maça', 'Uva', 'Laranja', 'Banana'];
fLen = frutas.length;
text = '';

for (i = 0; i < fLen; i++) {
    text += '<li>' + frutas[i] + '</li>';
}

document.getElementById('list1').innerHTML = text;

/* 2ª Forma: utilizando a função forEach() */
var verdura, tex;
var verdura = ['Cebola', 'Chuchu', 'Alface', 'Repolho'];

tex = '<ul>';
verdura.forEach(myFunction);
tex += '</ul>'; // tex = tex + </ul>; O tex está recebendo a ele mesmo += a ul. Como você está adicionando ele mesmo mais o valor, ele é adicionado na própria variável e não em outra (nova).

function myFunction(value) {
    tex += '<li>' + value + '</li>';
}

document.getElementById('list2').innerHTML = tex;

// Formas de reconhecer um Array
console.log(typeof frutas); // Retorna object porque um array é um tipo especial de objeto;
console.log(Array.isArray(frutas)); // 1ª Forma de verificar se ou não um array, método mais recente que pode resultar em conflito com browsers mais antigos;

function isArray(x) {
    return x.constructor.toString().indexOf('Array') > -1; // 2ª Forma de uma função criada para solucionar a verificação em browsers mais antigos;
}

console.log(isArray(frutas));

console.log(frutas instanceof Array); // 3ª Forma de usar o operador instanceof;

// Array Methods: Brincando com join(), push(), pop(), splice(), shift, unshift() e slice()

var el = document.getElementById('box5');

var jogos = ['CSGO', 'Valorant', 'League of Legends', 'GTA V']; // Aqui tem um array com 4 valores, com index indo até 3;

jogos.push('Resident Evil 4'); // Coloca "Resident Evil 4" no final da array;

// jogos.pop();
jogos.unshift('God of War'); // Coloca "God of War" no início da array;

jogos.splice(6, 0, 'FIFA'); // Uma forma de coloca um elemento no local desejado através do splice (emenda);
// O número "6" indica o index onde ficará o conteúdo, o número "0" indica quantos elementos serão removidos, e por fim "FIFA" é o elemento que será colocado;

el.innerHTML = jogos.join(' | '); // Usando o join() é possível determinar o separador que nesse caso é uma barra com espaços;

var el2 = document.getElementById('box6');

el2.innerHTML = jogos.slice(1, 5).join(' /\\ '); // O slice recorta parte de um array, admite dois parâmetros um é o início, e o segundo o final (o final não é incluído);

// Algo interessante na última linha acima, é que a ordem como tá disposto slice e join influenciam diretamente no resultado final.
