const {
  getUser,
  postUser,
  getAllUsers,
  userById,
  putEditUser,
  putStatusUser,
  restoreStatusUser

} = require("../controllers/UserControllers");

//* Handler que verifica en la DB si existe el User
const getUserHandler = async (req, res) => {
    const { email } = req.params;
    try {
      const user = await getUser(email);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

//* Handler que trae a todos los Users de la DB
const getAllUsersHandler = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//* Handler que postea el user en la DB
const postUserHandler = async (req, res) => {

  const { name, birthDate, phone, email, password, country, image } = req.body;


  if (!name || !email) res.status(400).json({ msg: 'Missing required data' });

  try {
    const newUser = await postUser(name, birthDate, image, phone, email, password, country);
    res.status(200).json({ msg: "User added successfully", userId: [newUser.id ] });
  } catch (error) {
      console.log(error, "THIS IS THE ERROR")
    res.status(400).json({ error: error.message });
  }
};

//* Handler que busca a usuario por ID
const getUserById = async (req, res) => {
  const { user_id } = req.params;
  try {
    const userId = await userById(user_id);
    res.status(200).json(userId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// //* Handler que modifica datos del usuario
const putEditUserHandler = async (req, res) => {
  const image = req.file;
  const { name, birthDate, phone, email, password, country } = req.body
  console.log(req.body)
  console.log(image)
   try {
     console.log({msg: "handler:", image});
    const editedUser = await putEditUser(name, birthDate, image, phone, email, password, country)
    res.status(200).json({msg: "Data changed successfully", editedUser})
  } catch (error) {
    res.status(400).json({ error })
  }
}

// //* Handler para inactivar un user
const putStatusUserHandler = async (req, res) => {
  const { id_user } = req.params

  try {
    await putStatusUser(id_user);
    res.status(200).json("User deleted successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

///  Handler para activar user ////////////
const restoreStatusUserHandler = async (req, res) => {
  const { id_user } = req.params

  try {
    await restoreStatusUser(id_user);
    res.status(200).json("The user has been restored successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUserHandler,
  postUserHandler,
  getAllUsersHandler,
  getUserById,
  putEditUserHandler,
  putStatusUserHandler,
  restoreStatusUserHandler,
};
