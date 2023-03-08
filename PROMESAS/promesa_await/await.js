const { writeFile } = require('fs');
const fs = require('fs/promises');
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

async function asyncAwait() {

    let persona = {}

    try {
        persona.name = await pregunta("Cual es tu nombre?: ")
        persona.surname = await pregunta("Cual es tu apellido?: ")
        persona.age = await pregunta("Cuantos años tienes?: ")
        await fs.writeFile("nuevo.json", JSON.stringify(persona))
        let data = fs.readFile("nuevo.json", "utf8")
        console.log(JSON.parse(data));
     
    }
    catch (error) {
        console.log(error);
    }
}
