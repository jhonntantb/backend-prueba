const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {

    sequelize.define("product", {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        catalog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        title: {
            type: DataTypes.STRING
        },
        resume: {
            type: DataTypes.TEXT
        },
        detail: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.FLOAT
        },
    });
}