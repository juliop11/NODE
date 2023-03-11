const { Book } = require("../models/book");

let book = null;

function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);
}


function getBook(request, response) {
    let respuesta;

    if (book != null)
        respuesta = { error: false, codigo: 200, data: book };
    else
        respuesta = { error: true, codigo: 200, mensaje: "El libro no existe" }

    console.log(respuesta);
    response.send(respuesta);
}

function postBook(request, response) {
    let respuesta;
    console.log(request.body)
    if (book === null) {

        book = new Book(
            request.body.id_book,
            request.body.id_user,
            request.body.title,
            request.body.type,
            request.body.author,
            request.body.price,
            request.body.photo
        )

        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Libro creado', data: book
        };
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'El libro ya existe'
        };

    response.send(respuesta);
}

function putBook(request, response) {
    let respuesta
    if (book != null)
    {
        book.id_book = request.body.id_book;
        book.id_user = request.body.id_user;
        book.title = request.body.title;
        book.type = request.body.type;
        book.author = request.body.author;
        book.price = request.body.price;
        book.photo = request.body.photo;

        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Libro actualizado', data: book
        };
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'El libro no existe', data: book
        };

    response.send(respuesta);
};

function deleteBook(request, response) {
    let respuesta
    if (book != null) {
        book = null;
        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Usuario borrado', data: book
        };
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'El usuario no existe', data: book
        };

    response.send(respuesta);
};

module.exports = { getStart, getBook, postBook, putBook, deleteBook };