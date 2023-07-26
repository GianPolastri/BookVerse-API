const { Router } = require('express');
const { getAllFormats } = require('../handlers/formatHandler')
const formatRouter = Router();

formatRouter.get('/', getAllFormats);

module.exports =  formatRouter ;