const { Book } = require("../models/book");

let libro1 = new Book(234, 7, "El principito", "Tapa blanda", "Antonie de Saint", 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DOdmwI_VVPqoYsVGnoDX9UA3M0_hXP1BiQ&usqp=CAU")
let libro2 = new Book(655, 6, "Harry potter", "Tapa dura", "Joanne Rowling", 35, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBa889rxTjtuFJTW5MOA7MXT_m77i7mfGBg&usqp=CAU")
let libro3 = new Book(557, 8, "La chica del tren", "Tapa blanda", "Paula Hawkins", 28, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPnric7nxjrwba_ktZFJP2cOrHhorE-EGew&usqp=CAU")

let books = [libro1, libro2, libro3];

function getBookId(request, response) {

    let libro = request.query.id;

    let respuesta;
    let libroEncontrado = books.find(book => book.id_book == libro);

    if (!libro) {

        respuesta = books;
    }
    else {

        if (libroEncontrado != undefined) {

            respuesta = { error: false, codigo: 200, mensaje: "Libro encontrado", data: libroEncontrado }
        }
        else {
            respuesta = { error: true, codigo: 200, mensaje: "No hay coincidencias", data: books }
        }
    }

    response.send(respuesta);
}

function postBook(request, response) {
    let respuesta;

    books.push(new Book(
        request.body.id_book,
        request.body.id_user,
        request.body.title,
        request.body.type,
        request.body.author,
        request.body.price,
        request.body.photo
    ))

    respuesta = {
        error: false, codigo: 200,
        mensaje: 'Libro creado', data: books
    };


    response.send(respuesta);
}

function putBook(request, response) {

    let respuesta;

    let libro = books.findIndex(function (book) {
        return book.id_book == request.body.id_book;
    });

    if (libro != -1) {
        books[libro].id_book = request.body.id_book;
        books[libro].id_user = request.body.id_user;
        books[libro].title = request.body.title;
        books[libro].type = request.body.type;
        books[libro].author = request.body.author;
        books[libro].price = request.body.price;
        books[libro].photo = request.body.photo;

        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Libro actualizado', data: books[libro]
        };
    }
    else if (libro == -1) {

        respuesta = {
            error: true, codigo: 200,
            mensaje: 'El libro no existe', data: books
        };
    }
    response.send(respuesta);
};

function deleteBook(request, response) {

    let respuesta
    let borrarLibro = books.findIndex(book => book.id_book == request.body.id_book)


    if (borrarLibro != -1) {

        books.splice(borrarLibro, 1);

        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Usuario borrado', data: books
        };
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'El usuario no existe', data: books
        };

    response.send(respuesta);
};

module.exports = { getBookId, postBook, putBook, deleteBook };