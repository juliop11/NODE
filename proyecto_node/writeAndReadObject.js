const fs = require('fs');

function writeAndRead(path, obj) {

    fs.writeFile(path, JSON.stringify(obj), 'utf8', (err) => {
        if (err) throw err;

        fs.readFile(path, 'utf8', (error, datos) => {
            if (error) throw error;
            console.log("El contenido es: ", datos);
            process.exit();
        });
    });
}
// writeAndRead("./fichero.json",{nombre:"juan", apellido:"gomez", age:34})

module.exports = { writeAndRead }