const orderService = require('../services/order.services');

module.exports = {
    async createOrder(req, res, next) {
        try {
            const result = await orderService.createOrder(req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async getAllOrders(req, res, next) {
        try {
            const result = await orderService.getAllOrders();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async getOrder(req, res, next) {
        try {
            const result = await orderService.getOrder(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async updateOrder(req, res, next) {
        try {
            const result = await orderService.updateOrder(req.params.id, req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async deleteOrder(req, res, next) {
        try {
            const result = await orderService.deleteOrder(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
};
