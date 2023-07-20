const { Router } = require ("express");
const booksRouter = Router();
const uploadImage = require("./storage")
const {
    getAllBooksHandler,
    getDetailBooksHandler,
    postBooksHandler,
    deleteBooks,
    restoreBooks
} = require ('../handlers/booksHandler')

booksRouter.get('/', getAllBooksHandler);
booksRouter.get('/:id_books', getDetailBooksHandler);
booksRouter.post('/create', uploadImage, postBooksHandler); 
booksRouter.post('/restore/:id', restoreBooks);
booksRouter.delete('/delete/:id', deleteBooks);

module.exports = booksRouter;