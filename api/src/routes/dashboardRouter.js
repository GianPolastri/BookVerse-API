const { Router } = require('express');
const { dashboardBooksHandler, } = require('../handlers/dashboardHandlers');
const { postBooksHandler, deleteBooks, restoreBooks } = require ('../handlers/booksHandler');
const uploadImage = require("./storage");


const dashboardRouter = Router();

//* rutas de books
dashboardRouter.get('/books', dashboardBooksHandler);
// dashboardRouter.post('/books/create', uploadImage, postBooksHandler);
dashboardRouter.post('/books/restore/:id', restoreBooks);
dashboardRouter.delete('/books/delete/:id', deleteBooks);

module.exports = dashboardRouter;


// booksRouter.post('/create', uploadImage, postBooksHandler); 
// booksRouter.post('/restore/:id', restoreBooks);
// booksRouter.delete('/delete/:id', deleteBooks);