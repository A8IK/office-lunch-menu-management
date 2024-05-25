const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { Client } = require('pg');
const client = require('./database');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: 'express-session',
    resave: false,
    saveUninitialized: true,
}));

client.connect((err) => {
    if(err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log('Database connected successfully');
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
