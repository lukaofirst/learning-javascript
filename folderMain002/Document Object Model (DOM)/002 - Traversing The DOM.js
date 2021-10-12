/* ----- Traversing The DOM ----- */

/*** children ***/
// Returns a live HTMLCollection which contains all of the child elements
// of the element upon which it was callend
const ul = document.querySelector('ul');
console.log(ul.children);

/*** childNodes ***/
// Returns a live NodeList of child nodes of the give element where the first
// child node is assigned index 0.
// Child nodes include elements, text and comments
console.log(ul.childNodes);

/*** parentNode ***/
// Returns a parent of the specified node in the DOM tree
const liFirst = document.querySelector('li:first-child');
console.log(liFirst.parentNode);

/*** parentElement ***/
// Returns the DOM node's parente Element, or null if the node either has no parent
console.log(liFirst.parentElement);

// The difference between them, is when reaches at the very top of document.documentElement
// for the parentNode will return document, but with parenElement, instead will return null
console.log(document.documentElement.parentElement);
