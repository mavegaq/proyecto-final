const { Cart } = require('../models');

class CartRepository {
  constructor() {
    this.CartModel = Cart;
  }

  async createCart(cart) {
    return await this.CartModel.create(cart);
  }

  async updateCart(id, cartData) {
    return await this.CartModel.update(cartData, { where: { id } });
  }

  async getAllCarts() {
    return await this.CartModel.findAll();
  }

  async getCartById(id) {
    return await this.CartModel.findByPk(id);
  }

  async deleteCart(id) {
    return await this.CartModel.destroy({ where: { id } });
  }

  async getCartByUserId(userId) {
    try {
        return await this.CartModel.findOne({ where: { userId } });
    } catch (error) {
        throw error;
    }
}

}

module.exports = {
  CartRepository: new CartRepository()
};
