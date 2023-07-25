const { Router } = require('express');
const { getAllLang } = require('../handlers/languageHandler');
const languageRouter = Router()

languageRouter.get('/', getAllLang)

module.exports =  languageRouter;