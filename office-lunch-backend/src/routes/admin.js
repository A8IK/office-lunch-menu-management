const express = require('express');
const { addMenu, viewChoices } = require('../controllers/adminController');
const router = express.Router();

router.post('/menu', addMenu);

module.exports = router;
