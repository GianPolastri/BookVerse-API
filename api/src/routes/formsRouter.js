const { Router } = require('express');
const { formFooterHandler} = require('../handlers/formsHandler');

const formsRouter = Router();

formsRouter.post('/formFooter', formFooterHandler);

module.exports = formsRouter;
