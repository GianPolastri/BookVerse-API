const { Router } = require("express");
// import reouter
const UserRouter = require("./user.routes");
const booksRouter = require('./eBookRouter');
const filterBooksRouter = require('./filters/filterBookRouter')
const orderRouter = require('./filters/orderRouter')
const formsRouter = require("./formsRouter")



const router = Router();

// Rutes

router.use("/user", UserRouter);
router.use('/books', booksRouter);
router.use('/filter', filterBooksRouter);
router.use('/order', orderRouter);
router.use("/form", formsRouter);


module.exports = router;