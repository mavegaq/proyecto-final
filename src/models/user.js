'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Product, {
        foreignKey: 'userId',
      });
      this.hasMany(models.Cart, {
        foreignKey: 'userId',
      });
      this.hasMany(models.Order, {
        foreignKey: 'userId',
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
