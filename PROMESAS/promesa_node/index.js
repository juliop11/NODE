let write = require("./writeAndReadObject");
let read = require("./readConsole");

read.readConsole(persona => (write.writeAndRead("./nuevoObjeto.json", persona)));