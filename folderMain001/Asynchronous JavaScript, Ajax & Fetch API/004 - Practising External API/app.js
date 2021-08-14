let input = document.querySelector('#userId');
let button = document.querySelector('.button');
let output = document.querySelector('.output');

button.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    const number = input;

    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${number.value}`, true);

    xhr.onload = function() {
        if(this.status === 200) {

            let response = JSON.parse(this.responseText);

            output.innerHTML += `
            <ul>
                <li> userID: ${response.id} <br> Title: ${response.title} <br> Body: ${response.body}</li>
            </ul>`;

            number.value = '';

        } else if (this.status === 404) {
            
            output.innerHTML = `Error ${this.status} - Algo está errado`;

            number.value = '';
            
        }
    } 

    xhr.send();
})