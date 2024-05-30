const express = require('express');
const postgresql = require('postgresql');
const cors = require('cors');
const {Client} = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'office-lunch-menu-management',
    user: 'postgres',
    password: '123456',
})
client.connect((err) => {
    if(err){
        console.error('connection error:', err.stack);
    }
    else{
        console.log('connected');
    }  
});  

module.exports = client;