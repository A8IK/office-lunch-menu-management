const client = require('../models/database');
const { addChoices, getChoicesdB } = require('../models/choices');
const getChoice = async (req, res) => {

    const {employee_id, employee_name, choice } = req.body;
    try {
        const choices = await addChoices(employee_id, employee_name, choice);
        res.status(200).json(choices);
    } 
    catch (error) {
        console.error('Error adding choice:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getChoices = async (req, res) => {
    const { employee_id} = req.params;

    try {
        const choices = await getChoicesdB(employee_id);
        res.status(200).json(choices);
    } 
    catch (error) {
        console.error('Error fetching choices:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = { getChoice, getChoices};
