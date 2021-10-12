/* ----- Creating and Inserting Elements ----- */

/*** HTML string ***/

// innerHTML => Add (render) HTML string
const uniqueId = document.getElementById('uniqueId');
uniqueId.innerHTML = 'lorem ipsum dolor sit amet';

// insertAdjacentHTML() => Add (render) HTML string in specific position
const p = document.createElement('p');
p.textContent = 'testeand';
uniqueId.insertAdjacentElement('beforeend', p);

/*** createElement() ***/

// append() / appendChild() => Append new DOM element/node
// prepend(), before(), after(), insertBefore() => insert new DOM element/node in specific position
// replaceChild(), replaceWith() => replace existing DOM element / node with new one
