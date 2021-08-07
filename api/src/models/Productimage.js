const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {

    sequelize.define("productimage", {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
    });
}