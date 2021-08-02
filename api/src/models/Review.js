const { DataTypes } = require("sequelize");

modelDefine = (sequelize) => {
    sequelize.define("review", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false, 
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
}

module.exports = modelDefine;