const client = require('../models/database');
const { loginUser } = require('../models/login1');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { userId, password, userType } = req.body;
    try {
        const result = await loginUser(userId, userType, password);
        
        if (result.success) {
            const token = jwt.sign({ userId, userType, password }, 'jsonwebtoken');
            if (result.userType === 'Employee') {
                res.status(200).json({ message: 'Login successful',token, redirectTo: '/employee' });
            } 
            else {
                res.status(200).json({ message: 'Login successful',token, redirectTo: '/admin' });
            }
        } 
        else {
            res.status(401).json({ message: result.message });
        }
    } 
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {handleLogin};

