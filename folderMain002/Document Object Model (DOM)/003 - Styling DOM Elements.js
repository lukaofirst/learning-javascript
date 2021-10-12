/* ----- Styling DOM Elements ----- */

/*** Via style property ***/

// Directly target individual CSS styles (on the element)

// Controls styles as inline styles on the element

// Styles property names are based on CSS properties but have adjusted names (e.g. backgroundColor)
const div = document.querySelector('div');
div.style.backgroundColor = 'red';

/*** Via className ***/

// Directly set the CSS classes assigned to the element

// Set/Control all classes at once

// You can also control the id or other properties
div.className = 'bg-red';

/*** Via classList ***/

// Conveniently add, remove, or toggle CSS classes

// Fine-grained control over classes that are added

// Can be used with className (with care)
div.classList.add = 'bg-blue';
div.classList.remove = 'bg-blue';
div.classList.toggle = 'visible';
