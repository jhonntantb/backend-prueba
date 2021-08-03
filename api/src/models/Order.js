const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
        home_address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          location: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          province: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          country: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        delivery_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
}

