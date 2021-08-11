/****** PROTOTYPE - ACESSAR, MUDAR VALORES ******/

function Pessoa(firstName, secondName, age, work) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.work = work;
}

Pessoa.prototype.fullName = function () {
    return `${this.firstName} ${this.secondName}`;
};

let pessoa1 = new Pessoa('Lucas', 'Macedo', '23', 'Front-end Developer');

Pessoa.prototype.yearBirthday = function () {
    let d = new Date();
    let dYear = d.getFullYear();

    return dYear - this.age;
};

Pessoa.prototype.lastName = function (theLastName) {
    return (this.secondName = theLastName);
};

Pessoa.prototype.newWork = function (newWork) {
    return (this.work = newWork);
};

pessoa1.lastName('Oliveira');
pessoa1.newWork('Full-stack Web Developer');

console.log(pessoa1);
console.log(pessoa1.yearBirthday());
console.log(pessoa1.fullName());
console.log(pessoa1.work);
