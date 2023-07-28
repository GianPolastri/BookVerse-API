const { Router } = require("express");
// import reouter
const UserRouter = require("./user.routes");
const booksRouter = require('./eBookRouter');
const filterBooksRouter = require('./filters/filterBookRouter')
const orderRouter = require('./filters/orderRouter')
const formatRouter = require('./formatRouter')
const genreRouter = require('./genreRouter')
const languageRouter = require('./languageRouter')
const publisherRouter = require('./publisherRouter')
const formsRouter = require("./formsRouter")
const cartRouter = require("./cartRouter");


const router = Router();

// Rutes

router.use("/user", UserRouter);
router.use('/books', booksRouter);
router.use('/filter', filterBooksRouter);
router.use('/order', orderRouter);
router.use('/format', formatRouter);
router.use('/genre', genreRouter);
router.use('/language', languageRouter);
router.use('/publisher', publisherRouter);
router.use("/form", formsRouter);
router.use("/cart", cartRouter);

module.exports = router;