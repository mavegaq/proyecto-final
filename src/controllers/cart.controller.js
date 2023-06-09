const cartService = require('../services/cart.services');

module.exports = {
    async addProductToCart(req, res, next) {
        try {
            const { cartId, productId, quantity } = req.body;
            const result = await cartService.addProductToCart(cartId, productId, quantity);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async getCart(req, res, next) {
        try {
            const userId = req.user.id;
            const result = await cartService.getCartForUser(userId);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async createCartForUser(req, res, next) {
        try {
            const userId = req.user.id;
            const result = await cartService.createCartForUser(userId);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async checkout(req, res, next) {
        try {
            const userId = req.user.id;
            const result = await cartService.checkout(userId);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
};
