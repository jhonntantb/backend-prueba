const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('wishlist', {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey : true,
          
        },        

      });
}