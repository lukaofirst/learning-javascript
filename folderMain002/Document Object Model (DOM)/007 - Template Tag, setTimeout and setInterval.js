/* ----- Template Tag ----- */
// Is used to hold some content that will be hidden when the page loads

// Example
const showContent = () => {
    const someDiv = document.querySelector('#someDiv');
    const templateId = document.getElementById('templateId');
    const templateContent = document.importNode(templateId.content, true);

    someDiv.appendChild(templateContent);
    document.body.appendChild(someDiv);
};

setTimeout(() => {
    showContent();
}, 3000);

/* ----- setTimeout and setInterval ----- */

/* --- setTimeout --- */
// setTimeout will execute a callback function after a specific time in milliseconds

// Example
// You can store setTimeout or setInterval to later, clear it
const executeAfterSomeTime = setTimeout(() => {
    console.log('executado...');
}, 1000);

/* --- setInterval */
// setInterval will repeat a callback function every time after a time in milliseconds
const stopSetInterval = document.getElementById('stopSetInterval');

const executeEveryTime = setInterval(() => {
    console.log('executando...');
}, 2000);

// Clearing setInterval (the same logic with setTimeout [use clearTimeout]);
stopSetInterval.addEventListener('click', () => {
    clearInterval(executeEveryTime);
});
