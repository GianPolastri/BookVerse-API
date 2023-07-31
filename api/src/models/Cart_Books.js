const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('Cart_Books', {
        quantity: DataTypes.INTEGER,
    })
}