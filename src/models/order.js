'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsToMany(models.Product, {
        through: models.ProductInOrder,
        foreignKey: 'orderId',
      });
    }
  }
  Order.init({
    totalPrice: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
