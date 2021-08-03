const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('office', {

    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
}