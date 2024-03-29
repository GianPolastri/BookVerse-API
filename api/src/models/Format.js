const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('Format', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false,
      }
    )
}