const { DataTypes } = require("sequelize");

modelDefine = (sequelize) => {
    sequelize.define("schedule", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false, 
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
}

module.exports = modelDefine;