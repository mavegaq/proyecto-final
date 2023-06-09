'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInCart extends Model {
    static associate(models) {
      this.belongsTo(models.Cart, {
        foreignKey: 'cartId',
      });
      this.belongsTo(models.Product, {
        foreignKey: 'productId',
      });
    }
  }
  ProductInCart.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductInCart',
  });
  return ProductInCart;
};
