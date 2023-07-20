const { eBook, bookGenre, Format } = require ('../../db');
const { Op } = require ('sequelize');

const filtroGenero = async (name) => {
    const allBooks = await eBook.findAll({
        include: {
            model: bookGenre,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },
    });
    /* console.log(allProducts); */
    const filteredBooks = allBooks.filter((Books) =>
    Books.dataValues.bookGenre.some((p) => p.name === name));  //<---- arreglar metodo some "no se puede aplicar some en un array vacio, pero no esta vacio"

    if (!filteredBooks.length) {
        throw new Error ("Genero de libros no encontrados");
    }
    return filteredBooks;
};

const filtroFormato = async (name) => {
    const allBook = await eBook.findAll({
        include: [{
            model: bookGenre,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },{
            model: Format,
            attributes: [ 'name' ],
            through: {
                attributes: [],
            }
        }],
    });
    /* console.log(allProducts); */
    const filteredFormats = allBook.filter((Books) =>
    Books.dataValues.Format.some((p) => p.name === name));  //<---- arreglar metodo some "no se puede aplicar some en un array vacio, pero no esta vacio"

    if (!filteredFormats.length) {
        throw new Error ("Genero de libros no encontrados");
    }
    return filteredFormats;
};

const filtroNombre = async (name) => {
    const librosFiltrados = await eBook.findAll({
        where: {
            name: {
                [Op.iLike]: name,
            },
        },
        include: {
            model: bookGenre,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })

    return librosFiltrados;
}

module.exports = { filtroGenero, filtroNombre, filtroFormato };