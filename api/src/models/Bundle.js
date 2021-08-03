const { DataTypes } = require("sequelize");

modelDefine = (sequelize) => {
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
        discount: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });
}

module.exports = modelDefine;