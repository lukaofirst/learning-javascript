// .forEach(), Criando elementos e .map()

// Elementos do DOM
const container = document.querySelector('#container');
var boxes = document.querySelectorAll('.box');
var bo = document.querySelector('.box');

// Formas de rodar o loop
/*
            container.addEventListener('click', () => {
                boxes.forEach((e) => {
                    e.style.backgroundColor = 'mediumseagreen';
                })
            })

            container.addEventListener('click', () => {
                for(n of boxes){
                    n.style.backgroundColor = 'orange';
                }
            })
            */
var h2 = document.createElement('h2');
var text = document.createTextNode(
    "Don't stop when you're tired, stop when you're done"
);

h2.appendChild(text);
console.log(h2);
container.insertBefore(h2, bo);

for (n of boxes) {
    n.innerHTML = `<p>Eita, fui inserido dinamicamente via JavaScript ;)</p>`;
}

var pessoa = {
    firstName: 'Lucas',
    lastName: 'Oliveira',
    age: '23',
};

for (let n in pessoa) {
    console.log(`${n}: ${pessoa[n]}`);
}

// Using .map()
var cars = [
    { modelo: 'Fox', year: 2014 },
    { modelo: 'HB20', year: 2015 },
    { modelo: 'Onix', year: 2018 },
];

var modelos = cars.map(function (car) {
    console.log(car.modelo);
});

var usuarios = [
    {
        firstName: 'Lucas',
        lastName: 'Macedo',
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },
    },
    {
        firstName: 'Jonas',
        lastName: 'Bittencourt',
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },
    },
    {
        firstName: 'Elizabeth',
        lastName: 'Jhonson',
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },
    },
];

var nomeCompleto = usuarios.map(function (usuario) {
    console.log(usuario.fullName);
});
