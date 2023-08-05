const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('Sale', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        user_name:{
            type: DataTypes.STRING,
        },
        user_email:{
            type: DataTypes.STRING,
            isEmail: true,            
        },
        user_country:{
            type: DataTypes.STRING,
        },
        book:{
            type: DataTypes.STRING,
        },
        book_price:{
            type: DataTypes.INTEGER,
        },
        book_quantity:{
            type: DataTypes.INTEGER,
        },
        book_genre:{
            type: DataTypes.STRING,
        },
        book_publisher:{
            type: DataTypes.STRING,
        },
        book_language:{
            type: DataTypes.STRING,
        },
        book_author:{
            type: DataTypes.STRING,
        },
        date:{
            type: DataTypes.STRING,
        }
    })
}