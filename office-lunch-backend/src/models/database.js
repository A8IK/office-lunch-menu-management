const {MyDatabase} = require('./database');
const database = new MyDatabase ('office_lunch', 'username', 'password', {
    host: 'localhost',
    dialect: "postgres",
})

module.exports = database;