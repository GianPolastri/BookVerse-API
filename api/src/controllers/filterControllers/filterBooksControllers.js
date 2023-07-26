const { Book, Genre, Format, Language, Review, Publisher } = require ('../../db');
const { Op } = require ('sequelize');
const diacritic = require ('diacritic')

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
        throw new Error ("Genero de libros no encontrados");
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
        throw new Error ("Formato no encontrado");
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

const filtrarLibrosCombinados = async (filtros) => {
    let librosFiltrados = null;

    const { rows } = await Book.findAndCountAll({
        where: {
          // aqui se podrian agregar condiciones adicionales
        }, 
        include: [
          {
            model: Genre,
            attributes: ['name'],
            through: { attributes: [] },
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
          },
        ],
      });
  
      if (filtros.name) {
        librosFiltrados = rows.filter((Books) =>
          Books.dataValues?.title.toLowerCase().includes(filtros.name.toLowerCase())
        );
      } else {
        librosFiltrados = rows;
      }
    
      if (filtros.genre) {
        librosFiltrados = librosFiltrados.filter((Books) =>
        Books.dataValues?.Genres.some((genero) => genero.name === filtros.genre)
        );
      }
    
      if (filtros.format) {
        librosFiltrados = librosFiltrados.filter(
          (Books) => Books.dataValues?.Formats.name === filtros.format
        );
      }
    
      // Agregar más filtros aquí según tus necesidades
      console.log(rows);

      return librosFiltrados;
    };

module.exports = { filtroGenero, filtroNombre, filtroFormato, filtrarLibrosCombinados };