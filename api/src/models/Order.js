const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey : true,
          
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
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
          type: DataTypes.FLOAT,
          allowNull: false,
        }       
      });
}