// Estrutura básica

// (function() {
//     // Declaração de variáveis e funções restritas a esse escopo

//     return {
//         // Declaração de variáveis e funções globais
//     }
// })();

// // MODULE PATTERN (Padrão)

// const UICtrl = (function() {
//     let text = 'Hello World';

//     const changeText = function() {
//         const element = document.querySelector('h1');

//         element.textContent = text;
//     }

//     return {
//         callChangeText: function() {
//             changeText();   
//         }
//     }
// })();

// UICtrl.callChangeText();
// UICtrl.changeText(); - Vai dar erro, porque changeText não é uma função global


// REVEALING MODULE PATTERN (Padrão)

const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item adicionado...');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        })
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Diamantino'});

console.log(ItemCtrl.get(2));