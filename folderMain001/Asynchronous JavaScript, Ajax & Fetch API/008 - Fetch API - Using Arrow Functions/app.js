document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
    fetch('text/text.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err))
}

function getJson() {
    fetch('JSON/posts.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let output = '';

            data.forEach(post => {
                output += `
                    <li>${post.title}</li>
                    <p>${post.body}</p>
                    <hr>
                    `
            });

            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err))
}

function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let output = '';
            data.forEach(user => {
                output += `<li>${user.login}</li>`
            });

            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

