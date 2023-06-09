const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');

const createUser = async (userDetails) => {
    try {
        const hashedPassword = await bcrypt.hash(userDetails.password, 10);
        const user = await userRepository.create(userDetails.username, userDetails.email, hashedPassword, userDetails.avatar);
        return user;
    } catch (err) {
        throw err;
    }
};

const updateUser = async (id, userDetails) => {
    try {
        const user = await userRepository.update(id, userDetails.username, userDetails.avatar);
        return user;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createUser,
    updateUser,
};
