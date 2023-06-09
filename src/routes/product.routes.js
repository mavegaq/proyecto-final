const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.post('/create', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
