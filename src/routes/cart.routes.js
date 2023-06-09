const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');


router.post('/cart', cartController.addProductToCart);


router.get('/cart', cartController.getCart);


router.delete('/cart/:productId', cartController.removeProductFromCart);


router.put('/cart/:productId', cartController.updateProductQuantity);

module.exports = router;
