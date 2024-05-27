const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { Client } = require('pg');
const client = require('./models/database');
const authRoutes = require('./routes/login');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(bodyParser.json());
app.use(session({
    secret: 'jsonwebtoken',
    resave: false,
    saveUninitialized: true,
}));

app.use('/api', authRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

