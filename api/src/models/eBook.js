const { DataTypes } = require ("sequelize");

module.exports = (sequelize) => {

    sequelize.define('EBook',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            min: 1 
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        pages: {
            type: DataTypes.INTEGER,
        },
        publicationDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        }
    },{
        paranoid: true
    }
    )
}