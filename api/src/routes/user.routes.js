const { Router } = require("express");
const uploadImage = require('./storage')

const {
  getUserHandler,
  postUserHandler,
  getAllUsersHandler,
  getUserById,
  // putRolUserHandler,
  putEditUserHandler,
  putStatusUserHandler,
  restoreStatusUserHandler,
  getUserByEmail
} = require("../handlers/userHandler");

const UserRouter = Router();

UserRouter.get("/", getAllUsersHandler);
UserRouter.get("/:user_id", getUserById);
UserRouter.post("/", postUserHandler)
UserRouter.put("/edit", uploadImage, putEditUserHandler);
// UserRouter.delete("/status/:id_user",putStatusUserHandler);
// UserRouter.post("/restore/:id_user", restoreStatusUserHandler);
// UserRouter.put("/", putRolUserHandler);
UserRouter.get('/email/:email', getUserHandler);

module.exports = UserRouter;