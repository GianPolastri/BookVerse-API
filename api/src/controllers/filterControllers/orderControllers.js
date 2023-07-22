const { Book, Genre, Format, Language, Review, Publisher } = require ('../../db')

const porPrecio = async (precio) => {
    const orderedBooks = await Book.findAll({
        order: [['price', precio]],
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
return orderedBooks;
}

const porNombre = async (titulo) => {
    const orderedBooks = await Book.findAll({
        order: [['title', titulo]],
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
return orderedBooks;
}

module.exports = { porPrecio, porNombre };