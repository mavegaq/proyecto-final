const orderRepository = require('../repositories/order.repository');
const productInOrderRepository = require('../repositories/productinorder.repository');

const createOrderForUser = async (userId) => {
    try {
        const order = await orderRepository.create(userId);
        return order;
    } catch (err) {
        throw err;
    }
};

const addProductToOrder = async (orderId, productId, quantity, price) => {
    try {
        const productInOrder = await productInOrderRepository.addProduct(orderId, productId, quantity, price);
        return productInOrder;
    } catch (err) {
        throw err;
    }
};

const getOrdersForUser = async (userId) => {
    try {
        const orders = await orderRepository.findByUserId(userId);
        return orders;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createOrderForUser,
    addProductToOrder,
    getOrdersForUser,
};
