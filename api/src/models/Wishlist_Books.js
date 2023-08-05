const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('Wishlist_Books', {
        favourites: DataTypes.INTEGER,
    })
}