const { Router } = require("express");
// import reouter
const UserRouter = require("./user.routes");
const booksRouter = require('./eBookRouter');
const filterBooksRouter = require('./filters/filterBookRouter')



const router = Router();

// Rutes

router.use("/user", UserRouter);
router.use('/books', booksRouter);
router.use('/filter', filterBooksRouter);

module.exports = router;