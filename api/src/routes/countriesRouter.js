const { Router } = require('express');
const { countriesHandler } = require('../handlers/countriesHandler');

const countriesRouter = Router();

countriesRouter.get('/', countriesHandler)

module.exports = countriesRouter;