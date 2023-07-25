require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

console.log(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME);

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuringy
const { Genre, Cart_Products, Cart, Book, Format, Language, Publisher, Review, Rol, User } = sequelize.models;

// console.log(Genre);

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// User.hasOne(Rol);
// Rol.belongsTo(User);

Book.belongsToMany(Language, { through: 'Book_Language' });
Language.belongsToMany(Book, { through: 'Book_Language' });

Book.belongsToMany(Publisher, { through: 'Book_Publisher' });
Publisher.belongsToMany(Book, { through: 'Book_Publisher' });

Book.belongsToMany(Format, { through: 'Book_Format' });
Format.belongsToMany(Book, { through: 'Book_Format' });

Book.belongsToMany(Genre, { through: 'Book_Genre' });
Genre.belongsToMany(Book, { through: 'Book_Genre' });

Book.hasMany(Review, {foreignKey: "Book_Review"}); 
Review.belongsTo(Book, {foreignKey: "Book_Review"});

module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
