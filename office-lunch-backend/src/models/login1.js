const client = require('./database');

const loginUser = async (id, user_type, password) => {
    try {
        const query = `
        SELECT * FROM users
        WHERE id = $1 AND user_type = $2 AND password = $3`;

        const values = [id, user_type, password];
        const res = await client.query(query, values);
        console.log(res);
        if (res.rows.length > 0) {
            return { success: true, userType: res.rows[0].user_type };
        } 
        else {
            return { success: false, message: 'Invalid information' };
        }
    } 
    catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

module.exports = {loginUser,};
