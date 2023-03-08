
let readline = require('readline');


function pregunta(pregunta) {
    let question = new Promise((resolve, reject) => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question
}

async function readConsole(callback) {

    let persona = {}

    try {
        persona.name = await pregunta("Cual es tu nombre?: ")
        persona.surname = await pregunta("Cual es tu apellido?: ")
        persona.age = await pregunta("Cuantos años tienes?: ")
        callback(persona)
    }
    catch (error) {
        console.log(error);
    }
}
//  readConsole(console.log)
module.exports = { readConsole } 