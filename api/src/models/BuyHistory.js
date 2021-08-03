const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define("product", {

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