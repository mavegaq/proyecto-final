const productRepository = require('../repositories/product.repository');

const createProduct = async (name, description, price, availableQty, status, userId, productImage) => {
    try {
        const product = await productRepository.create(name, description, price, availableQty, status, userId, productImage);
        return product;
    } catch (err) {
        throw err;
    }
};

const updateProductDescription = async (id, description) => {
    try {
        const product = await productRepository.updateDescription(id, description);
        return product;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createProduct,
    updateProductDescription,
};
