const teams = [{name: 'FaZe'}, {name: 'Team Liquid'}, {name: 'SK Gaming'}, {name: 'Furia'}];

function createTeams(team) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            teams.push(team);

            let error = false;

            if(!error) {
                resolve();
            } else {
                reject('Opa, deu ruim ai jogador');
            }

        }, 1500);
    })    
}

function getTeams() {
    let output = '';

    teams.forEach(function(team) {
        output += `<li>${team.name}</li>`;
    })

    document.body.innerHTML = output;
}

createTeams({name: 'Immortals'})
.then(getTeams)
.catch(function(err) {
    console.log(err);
})
