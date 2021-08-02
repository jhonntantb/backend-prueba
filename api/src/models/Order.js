const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('Entregado', 'En espera', 'En preparacion'),
        },
        total_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        delivery_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
}

