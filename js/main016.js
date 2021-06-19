/*
Orientação a objetos consiste em declarar atributos ou propriedades a um objeto específico, por exemplo, as propriedades de um carro são diferentes um do outro, o cadastro de uma pessoa difere um do outro.

Instanciar um objeto é o mesmo que criar um objeto

Não confunda objetos de array com o estanciamento de objetos
*/

var usuario1 = new pessoa('Lucas', '23 anos', '62kg');

function pessoa(nome, idade, peso) {
    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.peso = peso;
    console.log(nome + ', ' + idade + ', ' + peso);
}

console.log(typeof pessoa.idade);
