/*** CLASSES, EXTENDENDO AS PROPRIEDADES DE UMA CLASSE, CRIANDO UM ARRAY DE OBJETOS ***/

// Declaração de variáveis

var el1 = document.getElementById('player1');
var el2 = document.getElementById('player2');
var el3 = document.getElementById('player3');
var el4 = document.getElementById('car1');
var el5 = document.getElementById('car2');
var el6 = document.getElementById('car3');
var el7 = document.getElementById('box3');

// Criando uma Classe que servirá de modelo para novos jogadores de CSGO
class playerCS {
    constructor(team, name, age, role) {
        this.team = team;
        this.name = name;
        this.age = age;
        this.role = role;
    }
}

// Reutilizando as propriedades de uma classe em outra
class previousTeam extends playerCS {
    constructor(team, name, age, role, pTeam) {
        super(team, name, age, role, pTeam); // Sem o super não será possível puxar as propriedades que existem no constructor de playerCS
        this.pTeam = pTeam;
    }

    showpTeam() {
        return this.pTeam;
    }
}

// Jogadores cadastrados usando a classe
var player1 = new playerCS('FaZe Clan', 'Coldzera', '26 years old', 'Rifler');
var player2 = new playerCS('G2', 'NiKo', '24 years old', 'Rifler');
var player3 = new playerCS(
    'Team Liquid',
    'FalleN',
    '29 years old',
    'AWPer',
    'MIBR'
);

// Jogadores reutilizandos as proprieades de uma classe
var player1 = new previousTeam(
    'FaZe Clan',
    'Coldzera',
    '26 years old',
    'Rifler',
    'MIBR'
);
console.log(player1.showpTeam());

/* Exibindo os jogadores via HTML */
el1.innerHTML =
    player1.team +
    '<br>' +
    player1.name +
    '<br>' +
    player1.age +
    '<br>' +
    player1.role;
el2.innerHTML =
    player2.team +
    '<br>' +
    player2.name +
    '<br>' +
    player2.age +
    '<br>' +
    player2.role;
el3.innerHTML =
    player3.team +
    '<br>' +
    player3.name +
    '<br>' +
    player3.age +
    '<br>' +
    player3.role;

// Brincando com um array de objetos
var carros = [
    {
        Fabricante: 'Volkswagen',
        Modelo: 'Fox',
        Motorização: '1.0',
        Ano: '2018',
    },
    {
        Fabricante: 'Hyundai',
        Modelo: 'HB20',
        Motorização: '1.6',
        Ano: '2015',
    },
    {
        Fabricante: 'Mercedes-Benz',
        Modelo: 'A250',
        Motorização: '2.0',
        Ano: '2019',
    },
];

/* Exibindo os objetos */

el4.innerHTML =
    carros[0].Fabricante +
    '<br>' +
    carros[0].Modelo +
    '<br>' +
    carros[0].Motorização +
    '<br>' +
    carros[0].Ano;
el5.innerHTML =
    carros[1].Fabricante +
    '<br>' +
    carros[1].Modelo +
    '<br>' +
    carros[1].Motorização +
    '<br>' +
    carros[1].Ano;
el6.innerHTML =
    carros[2].Fabricante +
    '<br>' +
    carros[2].Modelo +
    '<br>' +
    carros[2].Motorização +
    '<br>' +
    carros[2].Ano;
