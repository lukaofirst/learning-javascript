/***** Block Scope *****/

/* 
        
Para declarar um escopo, basta abrir e fechar chaves {}, tudo que estiver dentro deles será declarado dentro do escopo, ou seja, essa informação fica restrita ali.

Porém, algumas declarações podem "vazar", ou seja, são declaradas no escopo, mas que funcionam globalmente, por exemplo:

*/

{
    var nome = 'Lucas';
}

console.log(nome);

{
    function teste() {
        let nome = 'Fulano'; // Por mais que se tenha o let, como a função foi declarada de forma literal, então a função é global
        return nome;
    }
}

console.log(teste());

/* 

E o que isso quer dizer? 

Isso significar que, para situações em que eu não queira que o nome "Lucas" não seja usado globalmente, eu tenho que usar o let no lugar do var.

E também, caso queira que a função teste() seja usada localmente, eu não posso declarar a função de forma literal, mas sim em forma de variável (usando o let);

*/
