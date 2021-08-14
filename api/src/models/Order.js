const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('order', {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    status: {
      type: DataTypes.ENUM('shipped', 'cart', 'checkout', 'approved', 'rejected', 'cancelled','delivered'),
      defaultValue: "cart",
    },
    total_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
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
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
}