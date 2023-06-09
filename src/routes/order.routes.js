const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

router.post('/create', orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrder);
router.put('/update/:id', orderController.updateOrder);
router.delete('/delete/:id', orderController.deleteOrder);

module.exports = router;
