
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

function readConsole(callback) {

    let persona = {}

    pregunta("Cual es tu nombre?: ")

        .then((name) => {
            persona.name = name;
            return pregunta("Cual es tu apellido?: ");
        })
        .then((surname) => {
            persona.surname = surname;
            return pregunta("Cuantos años tienes?: ")
        })
        .then((age) => {
            persona.age = age;
            callback(persona);
        })
        .catch((err) => {
            console.log(err);
        })
}
// readConsole(console.log)
module.exports = { readConsole }   