const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
