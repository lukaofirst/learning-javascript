/*** Manipulando o DOM e Eventos no JS ***/

// DOM Elements
var ul = document.getElementById('list');

var className = document.getElementsByClassName('item');

var querySelectorAll = document.querySelectorAll('.item');

var children = ul.children;

console.log(typeof children);

console.log('1ª console.log: ', className, querySelectorAll, children);

ul.innerHTML += `<li class="item">Fourth Item</li>`;

console.log('2ª console.log: ', className, querySelectorAll, children);

// Eventos no JS e .addEventListener()
var button = document.getElementById('button');
var container = document.getElementById('container');
var outputBox = document.getElementById('outputBox');

//container.addEventListener('mousemove', runEvent);

var input = document.querySelector('input[type="text"]');
input.addEventListener('keyup', runEvent);

var select = document.querySelector('select');
select.addEventListener('change', runEvent);

var form = document.querySelector('form');
form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('O evento disparado é: ' + e.type);

    // console.log(e.target.value);

    // outputBox.innerHTML = `<h4>${e.target.value}</h4>`;

    /* 
                    outputBox.innerHTML = `<span>PositionX: ${e.offsetX}</span><br><span>PositionY: ${e.offsetY}</span>`
 
                    Interesting thing
                    outputBox.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 10)`;
                */
}

button.addEventListener('click', botaoClicado);

function botaoClicado(e) {
    console.log(e);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.type);
}
