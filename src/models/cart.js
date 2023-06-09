'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsToMany(models.Product, {
        through: models.ProductInCart,
        foreignKey: 'cartId',
      });
    }
  }
  Cart.init({
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
