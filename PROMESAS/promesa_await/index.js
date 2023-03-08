let write = require("./writeAndReadObjects");
let read = require("./readConsole");

read.readConsole(persona => (write.writeAndRead("./nuevo.json", persona)));