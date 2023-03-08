let persona = {
    name: "",
    surname: "",
    age: 0
}

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
        return fs.writeFile("promesa.json", JSON.stringify(persona))
    })
    .then(() => {
        return fs.readFile("promesa.json", "utf8")
    })
    .then((data) => {
        console.log(JSON.parse(data));
    })
    .catch((err) => {
        console.log(err);
    })
