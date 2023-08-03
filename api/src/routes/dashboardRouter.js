const { Router } = require('express');
const { dashboardBooksHandler, dashboardbalanceHandler, dashboardTransactionsHandler, dashboardUserHandler, } = require('../handlers/dashboardHandlers');
const { postBooksHandler, deleteBooks, restoreBooks } = require ('../handlers/booksHandler');
const { restoreStatusUserHandler, putStatusUserHandler, } = require("../handlers/userHandler");
const uploadImage = require("./storage");


const dashboardRouter = Router();

//* rutas de books
dashboardRouter.get('/books', dashboardBooksHandler);
// dashboardRouter.post('/books/create', uploadImage, postBooksHandler);
dashboardRouter.post('/books/restore/:id', restoreBooks);
dashboardRouter.delete('/books/delete/:id', deleteBooks);

//* rutas de data de ventas
dashboardRouter.get('/balance', dashboardbalanceHandler); //? Trae el total de guita recibida por ventas
dashboardRouter.get('/balance/transactions', dashboardTransactionsHandler) //? Trae los ultimos 10 recibos

//* rutas de usuarios
dashboardRouter.get('/user', dashboardUserHandler);
dashboardRouter.delete("/user/delete/:id_user", putStatusUserHandler);
dashboardRouter.post("/user/restore/:id_user", restoreStatusUserHandler);

module.exports = dashboardRouter;


// booksRouter.post('/create', uploadImage, postBooksHandler); 
// booksRouter.post('/restore/:id', restoreBooks);
// booksRouter.delete('/delete/:id', deleteBooks);