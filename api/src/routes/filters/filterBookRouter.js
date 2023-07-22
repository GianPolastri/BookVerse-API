const { Router } = require ('express');

const { filterByGenre, filterByName, filterByFormat, filterByAuthor } = require ("../../handlers/filterHandler/filterBooksHandler");
const filterRouter = Router();

filterRouter.get("/byGenre", filterByGenre);
filterRouter.get("/name", filterByName);
filterRouter.get('/format', filterByFormat);

module.exports = filterRouter; 
