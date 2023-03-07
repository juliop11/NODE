let persona = {
    name: "",
    surname: "",
    age: 0
}

const fs = require('fs');
let readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

let objeto = {};

rl.question('Cual es tu nombre? :', (respuesta) => {
    objeto.nombre = respuesta;

    rl.question('Cual es tu apellido? :', (respuesta) => {
        objeto.apellido = respuesta;

        rl.question('Cuantos años tienes? :', (respuesta) => {
            objeto.age = respuesta;

            fs.writeFile('objeto.json', JSON.stringify(objeto), 'utf8', (err) => {
                if (err) throw err;

                fs.readFile("objeto.json", 'utf8', (error, datos) => {
                    if (error) throw error;
                    console.log("El contenido es: ", datos);
                    rl.close();

                })
            })
        })
    })
})



