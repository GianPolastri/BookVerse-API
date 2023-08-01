const { Router } = require('express');
const { getUserWishlistHandler, addWishlistHandler, removeWishlistHandler, emptyWishlistHandler } = require('../handlers/wishlistHandler');


const cartRouter = Router();

cartRouter.get('/:user_id', getUserWishlistHandler);

cartRouter.post('/add', addWishlistHandler);

cartRouter.delete('/remove', removeWishlistHandler);

cartRouter.delete('/removeAll', emptyWishlistHandler);

/* cartRouter.put('/', changeQuantityHandler); */

module.exports = cartRouter;