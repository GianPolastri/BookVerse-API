//?----------------------------IMPORTS--------------------------------

const { User, Activity, Cart } = require("../db");
const { Op } = require("sequelize");
const cloudinary = require('cloudinary').v2;
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const CLOUD_NAME = process.env.CLOUD_NAME;
const ASSET_PATH_PRODUCTS = process.env.ASSET_PATH_PRODUCTS;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
})
//?----------------------------CONTROLLERS------------------------------

//*---------------GET ALL USERS----------------------
const getAllUsers = async () => {
    const allUsers = await User.findAll({
        // include: [
        //     {
        //         model: Cart,
        //     },
        // ],
    });


    return allUsers;
};

//*---------------GET USER BY ID------------------

const userById = async (id) => {
    if (!id) throw new Error("User ID is missing");

    const user = await User.findByPk(id, {
        // include: [
        //     {
        //         model: Activity,
        //         through: { attributes: [] },
        //     },
        // ],
    });

    if (!user) throw new Error("User not found");

    return user;
};

//*---------------CREATE USER---------------------

const postUser = async (
    name,
    birthDate,
    image,
    phone,
    email,
    password,
    country
) => {

    const imgPath = ASSET_PATH_PRODUCTS;

    const files = await fs.promises.readdir(imgPath);
    for (const file of files) {
        const imageFullPath = imgPath + file;
        console.log("outside", imageFullPath);

        try {
            console.log("inside", imageFullPath)
            const result = await cloudinary.uploader.upload(imageFullPath, { public_id: `image_${uuidv4()}` });
            const imgLink = result.secure_url;
            await fs.promises.unlink(imageFullPath);
            image = imgLink;
        } catch (error) {
            throw new Error(error);
        } 

    console.log("username:", name);
    console.log("email:", email);
    
    if (!name || !email)
        throw new Error("Missing data");
    
    const findUserByUsername = await User.findOne({ where: { name } });
    const findUserByEmail = await User.findOne({ where: { email } });
    
    if (findUserByUsername) throw new Error("Username already exists");
    
    if (findUserByEmail)
        throw new Error("User with the same email already exists");
    
    const newUser = await User.create({
        name,
        birthDate,
        image,
        phone,
        email,
        password,
        country
    });
    
    await newUser;
    return newUser;
}
};

//!-------lógica útil pero que sirve para admin------

// if (findUser.rol == 3) {
//   findAllUsers = await User.findAll({
//     where: {
//       id: {
//         [Op.not]: id_user,
//       },
//     },
//     order: [["id", "ASC"]],
//     attributes: ["id", "username", "email", "admin","voluntario", "padrino" ],
//   });
// } else {
//   throw new Error("Permiso denegado, no eres administrador");
// }

//*-----------------GET USER---------------------
const getUser = async (/* password, */ email) => {
 /*  if (!password) {
    throw new Error("No puede enviar una contraseña vacia");
  } else if (!email) {
    throw new Error("No puede enviar un email vacio");
  } else {};*/
    const findUser = await User.findOne({ 
        where: {
            email: email,
        }, 
     });
     return findUser;
   }



    /*if (!findUser) {
      throw new Error("El usuario no existe");
    }  else {
      const findUser2 = await User.findOne({
        where: { email },
        attributes: ["id", "name","birthDate", "image", "phone", "email", "admin", "password", "volunteer", "sponsor"],
      });
      if (!findUser2) {
        throw new Error("Contraseña equivocada");
      }
      if(!findUser2.status) throw new Error("Usuario bloqueado") */
  


// //*---------------PUT USER---------------------
const putEditUser = async (email, password, birthDate, image, phone, country, name) => {
    const findUser = await User.findOne({
        where: {
            email,
        }
    })

    if (!findUser) { throw new Error("User does not exist") }

    if (password) findUser.password = password
    if (birthDate) findUser.birthDate = birthDate
    if (image) findUser.image = image
    if (phone) findUser.phone = phone
    if (country) findUser.country = country
    if (name) findUser.name = name

    findUser.save()

    return;
}

// //*---------------PUT ROL USER---------------------
//  const putRolUser = async (id_user, rol) => {
//    const findUser = await User.findByPk(id_user);

//    if (findUser) {
//      findUser.rol = rol;

//      await findUser.save();
//    } else {
//      throw new Error("El usuario no existe");
//    }

//    return findUser;
//  };

// //*------------- INACTIVAR USER -------------------------
const putStatusUser = async (id_user) => {
    const findUser = await User.findByPk(id_user);

    if (!findUser) {
        throw new Error("User does not exist");
    } else {
        await findUser.update({ status: false }, { where: { id: id_user } });
        return;
    }
};


/////////////////RESTORE USER /////////////////////////////////
const restoreStatusUser = async (id_user) => {
    const findUser = await User.findByPk(id_user);

    if (!findUser) {
        throw new Error("User does not exist");
    } else {
        await findUser.update({
            status: true
        },
            { where: { id: id_user } });
            
        return;
    }

};

module.exports = {
    getUser,
    postUser,
    getAllUsers,
    userById,
    //putRolUser,
    putEditUser,
    putStatusUser,
    restoreStatusUser
};
