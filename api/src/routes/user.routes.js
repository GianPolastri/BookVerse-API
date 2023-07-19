const { Router } = require("express");


const {
  getUserHandler,
  postUserHandler,
  getAllUsersHandler,
  getUserById,
  putRolUserHandler,
  putEditUserHandler,
  putStatusUserHandler,
  restoreStatusUserHandler,
  getUserByMail
} = require("../handlers/userHandler");

const UserRouter = Router();



UserRouter.get("/", getAllUsersHandler);
UserRouter.get("/:user_id", getUserById);
UserRouter.post("/", postUserHandler)
// UserRouter.get("/:id_user", getAllUsersHandler);
UserRouter.put("/edit", putEditUserHandler)
UserRouter.delete("/status/:id_user",putStatusUserHandler)
UserRouter.post("/restore/:id_user", restoreStatusUserHandler)
UserRouter.put("/", putRolUserHandler);
UserRouter.get('/mail/:mail', getUserHandler);

module.exports = UserRouter;