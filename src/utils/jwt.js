const jwt = require('jsonwebtoken');
const secret = 'your-secret-key';  // Deberías tener esta clave en un archivo de configuración seguro.

function generateToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: '1h' });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, secret);
    } catch (e) {
        console.log(e);
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken,
};
