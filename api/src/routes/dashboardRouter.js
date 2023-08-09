const { Router } = require("express");
const {
    dashboardBooksHandler,
    dashboardbalanceHandler,
    dashboardTransactionsHandler,
    dashboardUserHandler,
    dashboardAllSalesHandler,
    dashboardSalesAmountHandler,
    dashboardSalesByPublisherHandler,
    dashboardSalesByGenreHandler,
    dashboardSalesByLanguageHandler,
    dashboardSalesByCountryHandler,
} = require("../handlers/dashboardHandlers");
const {
    postBooksHandler,
    deleteBooks,
    restoreBooks,
} = require("../handlers/booksHandler");
const {
    restoreStatusUserHandler,
    putStatusUserHandler,
} = require("../handlers/userHandler");
const uploadImage = require("./storage");

const dashboardRouter = Router();

//* rutas de books
dashboardRouter.get("/books", dashboardBooksHandler); //? Trae todos los libros sin importar soft-delete
// dashboardRouter.post('/books/create', uploadImage, postBooksHandler); //! No implementada todavia, sigue en ruta books
dashboardRouter.post("/books/restore/:id", restoreBooks); //? Restaura el libro
dashboardRouter.delete("/books/delete/:id", deleteBooks); //? Soft-delete del libro

//* rutas de data de ventas
dashboardRouter.get("/balance", dashboardbalanceHandler); //? Trae el total de guita recibida por ventas
dashboardRouter.get("/balance/transactions", dashboardTransactionsHandler); //? Trae los ultimos 10 recibos
dashboardRouter.get("/sales/all", dashboardAllSalesHandler); //? Trae todas las ventas en detalle por separado
dashboardRouter.get("/sales/amount", dashboardSalesAmountHandler); //? Cantidad de ventas (numero)
dashboardRouter.get("/sales/publisher", dashboardSalesByPublisherHandler); //? ventas por publisher
dashboardRouter.get("/sales/genre", dashboardSalesByGenreHandler); //? ventas por genre
dashboardRouter.get("/sales/language", dashboardSalesByLanguageHandler); //? ventas por language
dashboardRouter.get("/sales/country", dashboardSalesByCountryHandler); //? ventas por Country

//* rutas de usuarios
dashboardRouter.get("/user", dashboardUserHandler); //? Trae todos los usuarios sin importar soft-delete
dashboardRouter.delete("/user/delete/:id_user", putStatusUserHandler); //? soft-delete del usuario
dashboardRouter.post("/user/restore/:id_user", restoreStatusUserHandler); //? Desbanea al usuario

module.exports = dashboardRouter;

// booksRouter.post('/create', uploadImage, postBooksHandler);
// booksRouter.post('/restore/:id', restoreBooks);
// booksRouter.delete('/delete/:id', deleteBooks);
