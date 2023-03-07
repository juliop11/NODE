let readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

function readConsole(callback) {

    let objeto = {}

    rl.question('Cual es tu nombre? :', (respuesta) => {
        objeto.nombre = respuesta;

        rl.question('Cual es tu apellido? :', (respuesta) => {
            objeto.apellido = respuesta;

            rl.question('Cuantos años tienes? :', (respuesta) => {
                objeto.age = respuesta;

                return callback(objeto)
            })
        })
    })
}
module.exports = { readConsole }