const { Router } = require("express");
// import reouter
const UserRouter = require("./UserRouter");




const router = Router();

// Rutes

router.use("/user", UserRouter);

module.exports = router;