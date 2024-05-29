const client = require('../models/database');
const { addMenu, getMenu } = require('../models/menu');

const addMenuHandle = async (req, res) => {
    const { date, options } = req.body;
    try {
        await addMenu(date, options);
        res.status(201).json({ message: 'Menu added successfully' });
    } 
    catch (error) {
        console.error('Error adding menu:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const getMenuHandle = async (req, res) => {
    try {
        const menu = await getMenu();
        res.status(200).json(menu);
    } 
    catch (error) {
        console.error('Error fetching menu:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = { addMenuHandle, getMenuHandle };

