// Try & Catch - É uma forma de lidar com os erros, de maneira que você pode colocar avisos via DOM

// Você mesmo pode criar seus próprios erros e manipulá-los

const user = { name: 'Lucas' };

try {
    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    null.myFunction();

    // Produce a SyntaxError
    // eval('Hello World');

    // Produce a URIError
    // decodeURIComponent('%');

    if (!user.age) {
        throw 'O usuário não tem idade definida';
    }
} catch (e) {
    // O parâmetro "e" também pode ser declarado como err, error...

    console.log(e);
    //document.body.innerHTML = `<h1>${e}</h1>`;
    // document.body.innerHTML = `<h1>${e.name}</h1>`;
    //document.body.innerHTML = `<h1>${e.message}</h1>`;
} finally {
    // Irá executar independente do resultado

    console.log('Eu vou ser executado de todo jeito');
}
