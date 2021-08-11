/***** Declaring Functions *****/

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
