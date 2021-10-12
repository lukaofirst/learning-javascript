/* ----- Node Query Methods ----- */

// querySelector()
// Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class')
// and returns the first (!) matching element in the DOM.
// Returns null if no matching element could be found
const h1 = document.querySelector('div p:nth-of-type');

// getElementById()
// Takes an ID (without #, just the id name) and returns the element that has this id.
// Since the same ID shouldn't occur more than once on your page, it'll always return
// exactly that one element.
// Returns null if no elemento with the specified ID could be found
const uniqueDiv = document.getElementById('unique-div');

// querySelectorAll()
// Takes any CSS selector and returns all matching elements in the DOM as a static
// (non-live) NodeList.
// Returns a empty NodeList if no matching element could be found
const listOfLi = document.querySelectorAll('.some-class > li');

// getElementsByTagName()
// Takes an HTML tag and returns a live HTMLCollection of matched elements in your DOM.
// Returns an empty HTMLCollection if not matching elements were found.
const newInput = document.getElementsByTagName('input');

/* ----- Attributes and Properties ----- */
// Attributes are setted on HTML elements for example, type, value, id or class of a input
// Properties comes from JS, when we call '.id', '.className', '.value'
