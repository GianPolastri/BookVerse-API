const { Router } = require("express");
// import reouter
const UserRouter = require("./user.routes");
const booksRouter = require('./eBookRouter');



const router = Router();

// Rutes

router.use("/user", UserRouter);
router.use('/books', booksRouter);

module.exports = router;