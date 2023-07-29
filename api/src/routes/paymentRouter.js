const { Router } = require('express');
const { checkoutHandler, successHandler } = require('../handlers/paymentHandlers')

const paymentRouter = Router();

paymentRouter.post('/create-checkout-session', checkoutHandler)

paymentRouter.get('/success', successHandler)

paymentRouter.get('/cancel', (req, res) => res.send('Cancel'))

module.exports = paymentRouter;