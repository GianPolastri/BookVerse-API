const { Book, Genre, Format, Language, Review, Publisher } = require('../../db');
const { Op } = require('sequelize');
const diacritic = require('diacritic')

const filtroGenero = async (name) => {
    const allBooks = await Book.findAll({
        include: [
            {
                model: Genre,
                attributes: ['name'],
                through: { attributes: [] }
            },
            {
                model: Review,
                attributes: ['content', 'rating'],
            },
            {
                model: Format,
                attributes: ['name'],
            },
            {
                model: Language,
                attributes: ['name'],
            },
            {
                model: Publisher,
                attributes: ['name'],
            }
        ]
    });
    console.log(allBooks);
    const filteredBooks = allBooks.filter((Books) =>
        Books.dataValues.Genres.some((p) => p.name === name));  //<---- arreglar metodo some "no se puede aplicar some en un array vacio, pero no esta vacio"

    if (!filteredBooks.length) {
        throw new Error ("Book genre not found");
    }
    return filteredBooks;
};

const filtroFormato = async (name) => {
    const allBook = await Book.findAll({
        include: [
            {
                model: Genre,
                attributes: ['name'],
                through: { attributes: [] }
            },
            {
                model: Review,
                attributes: ['content', 'rating'],
            },
            {
                model: Format,
                attributes: ['name'],
            },
            {
                model: Language,
                attributes: ['name'],
            },
            {
                model: Publisher,
                attributes: ['name'],
            }
        ]
    });
    const filteredFormats = allBook.filter((Books) =>
        Books.dataValues.Formats.some((p) => p.name === name));  //<---- arreglar metodo some "no se puede aplicar some en un array vacio, pero no esta vacio"

    if (!filteredFormats.length) {
        throw new Error ("Format not found");
    }
    return filteredFormats;
};

const filtroNombre = async (name) => {
    const normalizedSearchTerm = diacritic.clean(name).replace(/[^\w\s]/g, '').toLowerCase(); //<--- tratar de normalizar el title, y no el name
    const librosFiltrados = await Book.findAll({
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.iLike]: `%${normalizedSearchTerm}%`
                    }
                },
                {
                    author: {
                        [Op.iLike]: `%${normalizedSearchTerm}%`
                    }
                }
            ]
        },
        include: [
            {
                model: Genre,
                attributes: ['name'],
                through: { attributes: [] }
            },
            {
                model: Review,
                attributes: ['content', 'rating'],
            },
            {
                model: Format,
                attributes: ['name'],
            },
            {
                model: Language,
                attributes: ['name'],
            },
            {
                model: Publisher,
                attributes: ['name'],
            }
        ]
    })

    return librosFiltrados;
}

const filtroLenguaje = async (name) => {
    const allBook = await Book.findAll({
        include: [
            {
                model: Genre,
                attributes: ['name'],
                through: { attributes: [] }
            },
            {
                model: Review,
                attributes: ['content', 'rating'],
            },
            {
                model: Format,
                attributes: ['name'],
            },
            {
                model: Language,
                attributes: ['name'],
            },
            {
                model: Publisher,
                attributes: ['name'],
            }
        ]
    });
    const filteredLanguages = allBook.filter((Books) =>
        Books.dataValues.Languages.some((p) => p.name === name));  //<---- arreglar metodo some "no se puede aplicar some en un array vacio, pero no esta vacio"

    if (!filteredLanguages.length) {
        throw new Error("Lenguaje no encontrado");
    }
    return filteredLanguages;
};

const filtroEditorial = async (name) => {
    const allBook = await Book.findAll({
        include: [
            {
                model: Genre,
                attributes: ['name'],
                through: { attributes: [] }
            },
            {
                model: Review,
                attributes: ['content', 'rating'],
            },
            {
                model: Format,
                attributes: ['name'],
            },
            {
                model: Language,
                attributes: ['name'],
            },
            {
                model: Publisher,
                attributes: ['name'],
            }
        ]
    });
    const filteredPublishers = allBook.filter((Books) =>
        Books.dataValues.Publishers.some((p) => p.name === name));  //<---- arreglar metodo some "no se puede aplicar some en un array vacio, pero no esta vacio"

    if (!filteredPublishers.length) {
        throw new Error("Lenguaje no encontrado");
    }
    return filteredPublishers;
};

const filtrarLibrosCombinados = async (filtros, ordenamiento) => {
    const normalizedSearchTerm = diacritic.clean(filtros.title).replace(/[^\w\s]/g, '').toLowerCase();
    const filters = {};

    if (normalizedSearchTerm) {
        filters['$title$'] = { [Op.iLike]: `%${normalizedSearchTerm}%` };
    }
    if (filtros.genre) {
        filters['$Genres.name$'] = { [Op.eq]: filtros.genre };
    }
    if (filtros.format) {
        filters['$Formats.name$'] = { [Op.eq]: filtros.format };
    }
    if (filtros.language) {
        filters['$Languages.name$'] = { [Op.eq]: filtros.language };
    }
    if (filtros.publisher) {
        filters['$Publishers.name$'] = { [Op.eq]: filtros.publisher };
    }

    const { rows: books, count } = await Book.findAndCountAll({
        where: filters,
        order: ordenamiento,
        include: [
            { model: Genre, as: 'Genres' },
            { model: Format, as: 'Formats' },
            { model: Language, as: 'Languages' },
            { model: Publisher, as: 'Publishers' },
            { model: Review, attributes: ['content', 'rating', 'email'] }
        ]
    })
    return ({ books, total: count });
};

const porPrecio = async (filtros, precio) => {
    return await filtrarLibrosCombinados(filtros, [['price', precio]]);
};

const porNombre = async (filtros, titulo) => {
    return await filtrarLibrosCombinados(filtros, [['title', titulo]]);
};




module.exports = { filtroGenero, filtroNombre, filtroFormato, filtroLenguaje, filtroEditorial, filtrarLibrosCombinados, porPrecio, porNombre };