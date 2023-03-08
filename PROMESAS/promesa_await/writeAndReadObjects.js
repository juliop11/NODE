const fs = require('fs/promises');

async function writeAndRead(path, obj) {

    try {

        await fs.writeFile(path, JSON.stringify(obj))
        let data = await fs.readFile(path, "utf8")
        console.log(JSON.parse(data));
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { writeAndRead }