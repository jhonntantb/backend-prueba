const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define("stock", {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
}

