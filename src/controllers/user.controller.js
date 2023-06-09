const userService = require('../services/user.services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async createUser(req, res, next) {
        try {
            const result = await userService.createUser(req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async loginUser(req, res, next) {
        try {
            const user = await userService.getUserByUsername(req.body.username);
            if (user) {
                const match = await bcrypt.compare(req.body.password, user.password);
                if (match) {
                    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
                    res.status(200).json({ message: "User authenticated successfully", token: token });
                } else {
                    res.status(401).json({ message: "Password is incorrect" });
                }
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            next(error);
        }
    },
    async getAllUsers(req, res, next) {
        try {
            const result = await userService.getAllUsers();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async getUser(req, res, next) {
        try {
            const result = await userService.getUser(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async updateUser(req, res, next) {
        try {
            const result = await userService.updateUser(req.params.id, req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
    async deleteUser(req, res, next) {
        try {
            const result = await userService.deleteUser(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    },
};
