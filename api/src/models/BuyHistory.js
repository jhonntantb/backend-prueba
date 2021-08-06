const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("buyHistory", {

        way: {
            type: DataTypes.STRING,
            allownull: false
        },
        detail: {
            type: DataTypes.STRING,
            allownull: false

        }
    });
}
