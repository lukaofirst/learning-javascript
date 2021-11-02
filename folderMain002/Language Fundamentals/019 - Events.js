/* ----- Events ----- */

// Different ways to listening to Events

// 1. Using html attributes
// This approach is not recommended because for large projects, its dificult to read and make maintenance
// <button onclick="alert('hello world')">Click here</button>

// 2. Using html attributes in scripts
// This approach is better than first but is not recommended because you cannot listen for more than one function
// The last one will override the previous one.
const button = document.getElementById('someButton');

const someAlert = () => {
    alert('hello world');
};

const anotherAlert = () => {
    alert('override alert');
};

// button.onclick = someAlert;
// button.onclick = anotherAlert;

// 3. Using .addEventListener method
// By far, the best approach to listen to events, because you avoid to use html attributes events
// and you can listen for more than one function
button.addEventListener('click', () => {
    someAlert();
    anotherAlert();
});

/* --- Removing Event Listeners --- */
// Here, you have to pass as second parameter the same name's function
// (not annonymous function, because they're not equals)

// Example
const button2 = document.getElementById('someButton2');

// This will not work as expected, because we're dealing with different functions
/* button2.addEventListener('click', () => {
    console.log('listening event');
})

button2.removeEventListener('click', () => {
    console.log('listening event');
})
 */

// To fix this:
const listeningEvent = () => {
    console.log('listening event');
};

button2.addEventListener('click', listeningEvent);

// after 3 seconds, button2 will not execute listeningEvent function
setTimeout(() => {
    button2.removeEventListener('click', listeningEvent);
}, 3000);

/* --- preventDefault() --- */
// It's used to literally prevent the default behavior on such element,
// for example, a submit button in a form or even a link that redirects to another page
const link = document.getElementById('toGoogle');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});

/* --- Capturing and Bubbling Events --- */
// Capturing will look for events from outside to inside in nested elements
// Bubbling will look for events from inside to outside in nested elements

// For default, the addEventListener method looks for bubbling events,
// to change that, you have to use 'true' as a third parameter in addEventListener
// for the parentElement

const someDiv3 = document.getElementById('someDiv3');
const someButton3 = document.getElementById('someButton3');

someDiv3.addEventListener('click', (e) => {
    console.log('div was clicked');
});

/* --- stopPropagation() --- */
// This will literally stop the capturing or bubbling events
someButton3.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('button was clicked');
});

/* --- Event Delegation --- */
// Bubbling also allows us to take advantage of event delegation
// You can set the event listener on their parent and have events that happen on them bubble up to their parent
// rather than having to set the event listener on every child individually.
const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
    if (e.target.closest('li') !== null)
        e.target.closest('li').classList.toggle('highlight');
});
