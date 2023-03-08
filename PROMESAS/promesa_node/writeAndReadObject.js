const fs = require('fs/promises');

function writeAndRead(path, obj){

    fs.writeFile(path, JSON.stringify(obj))
    .then( () =>{
        return fs.readFile(path, obj)
    })
    .then(data => {
        console.log(JSON.parse(data));
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = { writeAndRead }