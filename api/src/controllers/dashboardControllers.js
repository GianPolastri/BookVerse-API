const { Book } = require('../db');

const dashboardBooksController = async () => {
    const books = await Book.findAll({paranoid: false});

    return books;
}

module.exports = { dashboardBooksController, }