let write = require("./writeAndReadObject");
let read = require("./readConsole");

read.readConsole(objeto => (write.writeAndRead("./nuevoObjeto.json", objeto)));