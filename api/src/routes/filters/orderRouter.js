const { Router } = require ('express');

const {  orderByPrice } = require ("../../handlers/filterHandler/orderHandlers");
const orderRouter = Router();

orderRouter.get("/byPrice", orderByPrice);

module.exports = orderRouter;