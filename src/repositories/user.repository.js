const { User } = require('../models');

class UserRepository {
  constructor() {
    this.UserModel = User;
  }

  async createUser(user) {
    return await this.UserModel.create(user);
  }

  async updateUser(id, userData) {
    return await this.UserModel.update(userData, { where: { id } });
  }

  async getUserByEmail(email) {
    return await this.UserModel.findOne({ where: { email } });
  }

  async getAllUsers() {
    return await this.UserModel.findAll();
  }

  async getUserById(id) {
    return await this.UserModel.findByPk(id);
  }

  async deleteUser(id) {
    return await this.UserModel.destroy({ where: { id } });
  }
}

module.exports = {
  UserRepository: new UserRepository()
};
