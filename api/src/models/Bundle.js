const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("bundle", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discout: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });
}

