'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsToMany(models.Cart, {
        through: models.ProductInCart,
        foreignKey: 'productId',
      });
      this.belongsToMany(models.Order, {
        through: models.ProductInOrder,
        foreignKey: 'productId',
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    availableQty: DataTypes.INTEGER,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    productImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
