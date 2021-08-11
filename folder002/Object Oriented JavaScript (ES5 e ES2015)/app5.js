/****** Classes (ES6) - Expandindo os métodos de uma classe ******/

class Car {
    constructor(fabricante, modelo, ano, motor, preco) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.ano = ano;
        this.motor = motor.toFixed(1);
        this.preco = preco;
    }

    info() {
        return `Car:
            Fabricante: ${this.fabricante}
            Modelo: ${this.modelo}
            Ano: ${this.ano}
            Motor: ${this.motor}
            Preço: ${this.preco}
        `;
    }
}

let car1 = new Car('Volskwagen', 'Fox', 2014, 1, 30000);

console.log(car1.info());

class CarComplete extends Car {
    constructor(
        fabricante,
        modelo,
        ano,
        motor,
        preco,
        cambio,
        direcao,
        velMax
    ) {
        super(fabricante, modelo, ano, motor, preco);

        this.cambio = cambio;
        this.direcao = direcao;
        this.velMax = velMax;
    }

    infoComplete() {
        return `Car:
            Fabricante: ${this.fabricante}
            Modelo: ${this.modelo}
            Ano: ${this.ano}
            Motor: ${this.motor}
            Preço: ${this.preco}
            Câmbio: ${this.cambio}
            Direção: ${this.direcao}
            Velocidade Máxima: ${this.velMax}
        `;
    }
}

let carComplete1 = new CarComplete(
    'Volskwagen',
    'Fox',
    2014,
    1,
    30000,
    'Manual',
    'Hidráulica',
    '160'
);

console.log(carComplete1.infoComplete());
