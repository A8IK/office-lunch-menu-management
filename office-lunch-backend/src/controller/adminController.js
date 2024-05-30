const { Menu, Choice } = require('../models');

exports.addMenu = async (req, res) => {
    try {
        const { date, options } = req.body;
        const menu = await Menu.create({ date, options });
        res.status(201).json(menu);
    } 
    catch (error) {
        res.status(500).json({ error: 'Error adding menu' });
    }
};

exports.viewChoices = async (req, res) => {
    try {
        const choices = await Choice.findAll();
        res.status(200).json(choices);
    } 
    catch (error) {
        res.status(500).json({ error: 'Error fetching choices' });
    }
};
