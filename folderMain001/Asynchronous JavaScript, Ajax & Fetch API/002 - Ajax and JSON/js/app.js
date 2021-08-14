let b1 = document.querySelector('.buttons.b1');
let b2 = document.querySelector('.buttons.b2');
let outputCarSingle = document.querySelector('.output-car-single');
let outputCars = document.querySelector('.output-cars');


b1.addEventListener('click', loadCarSingle);

function loadCarSingle() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', "./JSON's/carSingle.JSON", true);

    xhr.onload = function() {
        if(this.status === 200) {

            carSingle = JSON.parse(xhr.responseText);

            outputCarSingle.innerHTML = `
                <ul>
                    <li>Fabricante: ${carSingle.Fabricante}</li>
                    <li>Modelo: ${carSingle.Modelo}</li>
                    <li>Ano: ${carSingle.Ano}</li>
                    <li>Motor: ${carSingle.Motor.toFixed(1)}</li>
                </ul>
            `
        }
    }

    xhr.send();
}

b2.addEventListener('click', loadCars);

function loadCars() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', "./JSON's/cars.JSON", true);

    xhr.onload = function() {
        if(this.status === 200) {
            const cars = JSON.parse(this.responseText);
            
            outputCars.innerHTML = '';

            cars.forEach(function(car) {
                outputCars.innerHTML += `
                    <ul>
                        <li>Fabricante: ${car.Fabricante}</li>
                        <li>Modelo: ${car.Modelo}</li>
                        <li>Ano: ${car.Ano}</li>
                        <li>Motor: ${car.Motor}</li>
                        <br>
                    </ul>
                `
            })
        }
    }

    xhr.send();
}


