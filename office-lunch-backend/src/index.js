const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { Client } = require('pg');
const client = require('./models/database');
const authRoutes = require('./routes/login');
const choiceRoutes = require('./routes/choices');
const menuRoutes = require('./routes/menu');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(session({
    secret: 'jsonwebtoken',
    resave: false,
    saveUninitialized: true,
}));

app.use('/api', authRoutes);
app.use('/api', choiceRoutes);
app.use('/api', menuRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

