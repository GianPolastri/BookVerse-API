const { Router } = require('express');
const  getAllPublisher  = require('../handlers/publisherHandler');
const publisherRouter = Router()

publisherRouter.get('/', getAllPublisher);

module.exports = publisherRouter;