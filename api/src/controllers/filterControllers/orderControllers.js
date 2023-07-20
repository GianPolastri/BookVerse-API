const { eBook, bookGenre } = require ('../../db')

const porPrecio = async (precio) => {
    const orderedBooks = await eBook.findAll({
        order: [['price', precio]],
        include: {
            model: bookGenre,
            through: {
                attributes: [],
            },
        },
    })   
return orderedBooks;
}

module.exports = { porPrecio };