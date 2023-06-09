const express = require('express');
const router = express.Router();

const cartRoutes = require('./cart.routes');
const orderRoutes = require('./order.routes');
const productRoutes = require('./product.routes');
const userRoutes = require('./user.routes');

router.use('/cart', cartRoutes);
router.use('/order', orderRoutes);
router.use('/product', productRoutes);
router.use('/user', userRoutes);

module.exports = router;
