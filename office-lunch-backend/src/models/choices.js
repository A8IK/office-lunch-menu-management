const client = require('./database');

const addChoices = async (employee_id, employee_name, choices) => {

    console.log(`Adding choice for user with ID: ${employee_id}, name: ${employee_name}, ${choices}`);

    try {
        await client.query('BEGIN');
        const insertQuery = `
            INSERT INTO choices (user_id, employee_name, choices)
            VALUES ($1, $2, $3)
            RETURNING * ;`;
        
        const insertValues = [employee_id, employee_name, choices];
        const insertResult = await client.query(insertQuery, insertValues);

        await client.query('COMMIT');
        // return selectResult.rows;
        return insertResult.rows;
    } 
    catch (error) {
        await client.query('ROLLBACK');
        console.error('Error adding choices:', error);
        throw error;
    }
};

//To get choices from the database
const getChoicesdB = async () => {
    try {
        const query = 
        `SELECT * FROM choices`;
        const result = await client.query(query);

        console.log('Raw data from database:', result.rows);

        return { success: true, message: 'Choice received', data: result.rows };
    } 
    catch (error) {
        console.error('Error getting choice:', error);
        throw error;
    }
};

module.exports = { addChoices, getChoicesdB };

