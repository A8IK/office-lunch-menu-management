const client = require('../models/database');
const { addChoices, getChoicesdB } = require('../models/choices');

//Function to add choices
const getChoice = async (req, res) => {

    const {employee_id, employee_name, choices } = req.body;
    console.log(employee_id, employee_name, choices)
    try {
        const choicesT = await addChoices(employee_id, employee_name, choices);
        res.status(200).json(choicesT);
    } 
    catch (error) {
        console.error('Error adding choice:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//function to get choices
const getChoices = async (req, res) => {
    const { choice} = req.params;

    try {
        const choices = await getChoicesdB();
        res.status(200).json(choices);
    } 
    catch (error) {
        console.error('Error fetching choices:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = { getChoice, getChoices};
