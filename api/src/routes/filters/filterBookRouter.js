const { Router } = require ('express');

const { filterByGenre, filterByName, filterByFormat, filterByLanguage, filterByPublisher, combinedFilters } = require ("../../handlers/filterHandler/filterBooksHandler");
const filterRouter = Router();

filterRouter.get("/byGenre", filterByGenre);
filterRouter.get("/name", filterByName);
filterRouter.get('/format', filterByFormat);
filterRouter.get('/language', filterByLanguage);
filterRouter.get('/publisher', filterByPublisher)
filterRouter.get('/combined', combinedFilters);


module.exports = filterRouter; 
