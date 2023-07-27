const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.STRING,
            // defaultValue: 0,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "",
            isUrl: {
                msg: "Image must be an URL"
            }
        },
        phone: {
            type: DataTypes.STRING,
            defaultValue: 0,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: {
                msg: "Please enter a valid email"
            }
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 12345678,
            isAlphanumeric: {
                msg: "The password must be alphanumeric"
            }, //Chequea que sea alfanumerico
            // len: {
            //     arg: [[6, 14]],
            //     msg: "La contraseña debe tener entre 6 y 14 caracteres"
            // }, //longitud de la contraseña


        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        paranoid: true,
    }
    )
}

