const productRepository = require('../repositories/product.repository');
const cartRepository = require('../repositories/cart.repository');
const productInCartRepository = require('../repositories/productincart.repository');
const orderRepository = require('../repositories/order.repository');
const productInOrderRepository = require('../repositories/productinorder.repository');

const createCartForUser = async (userId) => {
    try {
        const cart = await cartRepository.create(userId);
        return cart;
    } catch (err) {
        throw err;
    }
};

const addProductToCart = async (cartId, productId, quantity) => {
    try {
        const product = await productRepository.findById(productId);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        const productInCart = await productInCartRepository.addProduct(cartId, productId, quantity, product.price);
        return productInCart;
    } catch (err) {
        throw err;
    }
};

const getCartForUser = async (userId) => {
    try {
        const cart = await cartRepository.findByUserId(userId);
        return cart;
    } catch (err) {
        throw err;
    }
};

const checkout = async (userId) => {
    try {
        const cart = await cartRepository.findByUserId(userId);
        if (!cart) {
            throw new Error('No se encontró el carrito para este usuario');
        }

        const productsInCart = await productInCartRepository.findProductsInCart(cart.id);

        if (productsInCart.length === 0) {
            throw new Error('No hay productos en el carrito para realizar el checkout');
        }

        let totalPrice = 0;

        productsInCart.forEach((productInCart) => {
            totalPrice += productInCart.quantity * productInCart.price;
            productInCart.status = 'purchased';
            productInCartRepository.update(productInCart.id, productInCart);
            productRepository.decreaseQuantity(productInCart.productId, productInCart.quantity);
        });

        const order = await orderRepository.create(userId, totalPrice);

        productsInCart.forEach((productInCart) => {
            productInOrderRepository.create(order.id, productInCart.productId, productInCart.quantity, productInCart.price, 'purchased');
        });

        await cartRepository.emptyCart(cart.id);

        return order;

    } catch (err) {
        throw err;
    }
};

module.exports = {
    createCartForUser,
    addProductToCart,
    getCartForUser,
    checkout,
};
