const { Router } = require('express');
const { getUserWishlistHandler, addWishlistHandler, removeWishlistHandler, emptyWishlistHandler } = require('../handlers/wishlistHandler');


const wishRouter = Router();

wishRouter.get('/:user_id', getUserWishlistHandler);

wishRouter.post('/add/', addWishlistHandler);

wishRouter.delete('/remove', removeWishlistHandler);

wishRouter.delete('/removeAll', emptyWishlistHandler);

/* wishRouter.put('/', changeQuantityHandler); */

module.exports = wishRouter;