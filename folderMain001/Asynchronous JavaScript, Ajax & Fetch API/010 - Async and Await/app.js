async function Users() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    return data;
}

Users()
    .then(users => console.log(users));
