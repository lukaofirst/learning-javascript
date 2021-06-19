/*** LIDANDO COM OBJETOS, LOOP FOR...IN, INNERHTML, FOREACH, DIFERENÇA ENTRE NULL E UNDEFINED, FORMAS DE DECLARAR UMA FUNÇÃO ***/

// Criando objeto e instanciando-os e exibindo-os no console do browser através de uma função
function automovel(Fabricante, Modelo, Motorização, Ano) {
    automovel.fabricante = Fabricante;
    automovel.modelo = Modelo;
    automovel.motorizacao = Motorização;
    automovel.anoFabricacao = Ano;

    console.log(
        'Empresa Fabricante: ' +
            Fabricante +
            '\n' +
            'Modelo do Carro: ' +
            Modelo +
            '\n' +
            'Motor: ' +
            Motorização +
            '\n' +
            'Ano de Fabricação: ' +
            Ano
    );
}

var car1 = new automovel('Volkswagen', 'Fox', '1.0', '2014');
var car2 = new automovel('Mercedes-Benz', 'A200', '1.6', '2020');

// Usando o loop for...in
for (n in automovel) {
    console.log(n + ': ' + automovel[n]);
}

// Criando um objeto simples, obtendo seus atributos e características e exibindo eles no console do browser
var pessoa = {
    PrimeiroNome: 'Luffy',
    UltimoNome: 'do Chapéu de Palha',
    Idade: 18,
    Genero: 'Masculino',
};

console.log(pessoa);

for (n in pessoa) {
    console.log(n + ': ' + pessoa[n]);
}

var el = document.getElementById('box');

el.innerHTML =
    pessoa['PrimeiroNome'] +
    ' ' +
    pessoa['UltimoNome'] +
    ' ' +
    pessoa['Idade'] +
    ' ' +
    pessoa['Genero'] +
    '<br>';

// Usando innerHTML e forEach()
var elementoBox2 = document.getElementById('box2');

var obj = {
    Nome: 'Lucas',
    Sobrenome: 'Macedo',
    Idade: '23 anos',
    Email: 'emailteste@gmail.com',
};

Object.keys(obj).forEach((key) => {
    elementoBox2.innerHTML += `${key}: ${obj[key]}` + '<br>';
});

var person = {
    fName: 'Naruto',
    lName: 'Uzumaki',
    fullName: function () {
        return this.fName + ' ' + this.lName;
    },
};

var elem = document.getElementById('box3');

elem.innerHTML =
    person.fName + '<br>' + person.lName + '<br>' + person.fullName();

// Diferenças entre null e undefined
var numNull = null;
var numUndefined = undefined;

console.log(typeof numNull); // Saída: object [Na verdade, deveria ser null, e é considerado um bug do JavaScript]
console.log(typeof numUndefined); // Saída: undefined

// Função que converte de Fahrenheit para Celsius
function paraCelsius(f) {
    return (5 / 9) * (f - 32);
}
console.log(paraCelsius(77) + '\n' + 'oi');

// Formas de declarar uma função

// 1ª Forma - Function Expression
myFunction();
function myFunction() {
    console.log('1ª Forma de declarar uma função');
}

// 2ª Forma - Function Expression
var funcao = function () {
    console.log('2ª Forma de declarar uma função');
};

funcao();

// 3ª Forma - IIFE - Immediately Invoked Function Expression
(function () {
    console.log('3ª Forma de declarar uma função');
})();
