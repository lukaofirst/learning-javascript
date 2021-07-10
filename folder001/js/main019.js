/** Promises - É uma funcionalidade utilizada tanto no front quanto no back-end que dirá como proceder se uma verificação será resolvida ou se será rejeitado **/

/*
function testes(){
    return new Promise((resolve, reject) => {
        const erro = false;         // Mude o valor false para true ou vice-versa

        if(erro){
            reject('Erro...');
        } else{
            resolve('A promise foi resolvida com sucesso');
        }
    })
}

testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
})
*/

/** Async e Await é uma forma mais 'elegante' de se lidar com as promises **/

function testes() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const erro = false; // Mude o valor false para true ou vice-versa

            if (erro) {
                reject('Erro...');
            } else {
                resolve('A promise foi resolvida com sucesso');
            }
        }, 5000);
    });
}

async function testes2() {
    await testes().then(function (res) {
        alert(res);
    });
    alert('Olá');
}

testes2();
