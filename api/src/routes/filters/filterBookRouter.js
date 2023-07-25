const { Router } = require ('express');

const { filterByGenre, filterByName, filterByFormat, filterByAuthor, combinedFilters } = require ("../../handlers/filterHandler/filterBooksHandler");
const filterRouter = Router();

filterRouter.get("/byGenre", filterByGenre);
filterRouter.get("/name", filterByName);
filterRouter.get('/format', filterByFormat);
filterRouter.get('/combined', combinedFilters);

module.exports = filterRouter; 
