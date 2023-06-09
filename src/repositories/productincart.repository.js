const { ProductInCart } = require('../models');

const createProductInCart = async (data) => {
    try {
        const productInCart = await ProductInCart.create(data);
        return productInCart;
    } catch (error) {
        throw error;
    }
}

const getProductsInCartByUserIdAndStatus = async (userId, status) => {
    try {
        const productsInCart = await ProductInCart.findAll({
            where: { 
                userId,
                status
            }
        });
        return productsInCart;
    } catch (error) {
        throw error;
    }
}

 const getProductsInCartByCartId = async (cartId) =>{
    try {
        const productsInCart = await ProductInCart.findAll({ where: { cartId } });
        return productsInCart;
    } catch (error) {
        throw error;
    }
}


const updateProductInCart = async (id, data) => {
    try {
        await ProductInCart.update(data, { 
            where: { id } 
        });
    } catch (error) {
        throw error;
    }
}

const deleteProductInCart = async (id) => {
    try {
        await ProductInCart.destroy({
            where: { id }
        });
    } catch (error) {
        throw error;
    }

    


}

module.exports = {
    createProductInCart,
    getProductsInCartByUserIdAndStatus,
    updateProductInCart,
    deleteProductInCart,
    getProductsInCartByCartId
};
