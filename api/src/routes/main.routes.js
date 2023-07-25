const { Router } = require("express");
// import reouter
const UserRouter = require("./user.routes");
const booksRouter = require('./eBookRouter');
const filterBooksRouter = require('./filters/filterBookRouter')
const orderRouter = require('./filters/orderRouter')
const genreRouter = require('./genreRouter')
const languageRouter = require('./languageRouter')
const publisherRouter = require('./publisherRouter')


const router = Router();

// Rutes

router.use("/user", UserRouter);
router.use('/books', booksRouter);
router.use('/filter', filterBooksRouter);
router.use('/order', orderRouter);
router.use('/genre', genreRouter);
router.use('/language', languageRouter);
router.use('/publisher', publisherRouter);



module.exports = router;