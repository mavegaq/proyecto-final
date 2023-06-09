const bcrypt = require('bcrypt');
const saltRounds = 10;

async function hashPassword(password) {
    return await bcrypt.hash(password, saltRounds);
}

async function comparePasswords(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = {
    hashPassword,
    comparePasswords,
};
