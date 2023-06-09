'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInOrder extends Model {
    static associate(models) {
      this.belongsTo(models.Order, {
        foreignKey: 'orderId',
      });
      this.belongsTo(models.Product, {
        foreignKey: 'productId',
      });
    }
  }
  ProductInOrder.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductInOrder',
  });
  return ProductInOrder;
};
