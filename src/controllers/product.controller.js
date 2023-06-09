const productService = require('../services/product.services');

module.exports = {
    async createProduct(req, res, next) {
        try {
            const result = await productService.createProduct(req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async getAllProducts(req, res, next) {
        try {
            const result = await productService.getAllProducts();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async getProduct(req, res, next) {
        try {
            const result = await productService.getProduct(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async updateProduct(req, res, next) {
        try {
            const result = await productService.updateProduct(req.params.id, req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async deleteProduct(req, res, next) {
        try {
            const result = await productService.deleteProduct(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
};
