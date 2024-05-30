const client = require('./database');

const addMenu = async (date, options) => {

    console.log(`date: ${date}, options: ${options}`);

    try {
        const query = 'INSERT INTO public.menus (date, options) VALUES ($1, $2::text[])';
        await client.query(query, [date, options]);
        return { success: true, message: 'Menu added successfully' };
    } 
    catch (error) {
        console.error('Error adding menu:', error);
        throw error;
    }
};

const getMenu = async () => {
    try {
        const res = await client.query(`SELECT * FROM menus ORDER BY date DESC`);
        return res.rows;
    } 
    catch (error) {
        console.error('Error fetching menu:', error);
        throw error;
    }
};

module.exports = { addMenu, getMenu };
