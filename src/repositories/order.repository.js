const { Order } = require('../models');

class OrderRepository {
  constructor() {
    this.OrderModel = Order;
  }

  async createOrder(order) {
    return await this.OrderModel.create(order);
  }

  async updateOrder(id, orderData) {
    return await this.OrderModel.update(orderData, { where: { id } });
  }

  async getAllOrders() {
    return await this.OrderModel.findAll();
  }

  async getOrderById(id) {
    return await this.OrderModel.findByPk(id);
  }

  async deleteOrder(id) {
    return await this.OrderModel.destroy({ where: { id } });
  }

  async updateOrderStatus(orderId, status) {
    return await this.OrderModel.update({ status }, { where: { id: orderId } });
  }
}

module.exports = {
  OrderRepository: new OrderRepository()
};
