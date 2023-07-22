const { Router } = require ('express');

const {  orderByPrice, orderByTitle } = require ("../../handlers/filterHandler/orderHandlers");
const orderRouter = Router();

orderRouter.get("/byPrice", orderByPrice);
orderRouter.get("/byTitle", orderByTitle);

module.exports = orderRouter;