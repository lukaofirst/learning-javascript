/* ----- Object Destructuring ----- */

const uniqueId = document.getElementById('uniqueId');

const infoLucas = {
    firstName: 'Lucas',
    lastName: 'Oliveira',
    age: 23,
    hobbies: ['Coding', 'Play videogames'],
    additionalInfo: {
        favoriteLanguage: 'JavaScript',
        stack: 'Front-end',
        level: 'Junior',
    },
};

// without Destructuring
/* uniqueId.innerHTML = `
    <h3>FullName: ${infoLucas.firstName} ${infoLucas.lastName}</h3>
    <p>Age: ${infoLucas.age}</p>
    <p>Hobbies: ${infoLucas.hobbies[0]} & ${infoLucas.hobbies[1]}</p>
    <p>Favorite Programming Language: ${infoLucas.additionalInfo.favoriteLanguage}</p>
    <p>Stack: ${infoLucas.additionalInfo.stack}</p>
    <p>Level: ${infoLucas.additionalInfo.level}</p>
`; */

// with Destructuring (nested objects)
const {
    firstName,
    lastName,
    age,
    hobbies,
    additionalInfo: { favoriteLanguage, stack, level },
} = infoLucas;

uniqueId.innerHTML = `
    <h3>FullName: ${firstName} ${lastName}</h3>
    <p>Age: ${age}</p>
    <p>Hobbies: ${hobbies[0]} & ${hobbies[1]}</p>
    <p>Favorite Programming Language: ${favoriteLanguage}</p>
    <p>Stack: ${stack}</p>
    <p>Level: ${level}</p>
`;
