const client = require('./database');

const addChoices = async (employee_id, employee_name, choices) => {

    // console.log(`Adding choice for user with ID: ${employee_id}, name: ${employee_name}, ${choices}`);

    try {
        await client.query('BEGIN');

        const formattedChoices = Array.isArray(choices) ? choices : [choices];

        const insertQuery = `
            INSERT INTO choices (user_id, employee_name, choices)
            VALUES ($1, $2, $3)
            RETURNING * ;`;
        
        const insertValues = [employee_id, employee_name, formattedChoices];
        const insertResult = await client.query(insertQuery, insertValues);
        const user_id = insertResult.rows[0].employee_id;

        const selectQuery = `
            SELECT u.id 
            FROM users u 
            JOIN choices c ON u.id = c.user_id
            WHERE c.user_id = $1;`;

        const selectValues = [user_id];
        const selectResult = await client.query(selectQuery, selectValues);

        await client.query('COMMIT');
        return selectResult.rows;
    } 
    catch (error) {
    
        await client.query('ROLLBACK');
        console.error('Error adding choices:', error);
        throw error;
    }
};

const getChoicesdB = async (employee_id) => {
    try {
        const query = 
        'SELECT * FROM choices WHERE user_id = $1 ';
        const result = await client.query(query, [employee_id, employee_name, choice]);
        return { success: true, message: 'Choice received', data: result.rows };
    } 
    catch (error) {
        console.error('Error getting choice:', error);
        throw error;
    }
};

module.exports = { addChoices, getChoicesdB };

