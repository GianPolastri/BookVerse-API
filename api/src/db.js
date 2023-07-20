require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const sequelize = new Sequelize( 
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

    { 
        logging: false, 
        native: false,
        // dialectOptions: {
        //     ssl: {
        //             require: true,
        //     }
        // }
    }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: fundacion => Fundacion
let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const { bookGenre, Cart_Products, Cart, EBook, Format, Language, Publisher, Reviews, Rol, User } = sequelize.models;

EBook.hasOne(Language);
Language.belongsTo(EBook);

EBook.hasOne(Publisher);
Publisher.belongsTo(EBook);

EBook.belongsToMany(Format, { through: EBook_Format });
Format.belongsToMany(EBook, { through: EBook_Format });

EBook.belongsToMany(bookGenre, { through: EBook_bookGenre });
bookGenre.belongsToMany(EBook, { through: EBook_bookGenre });

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
