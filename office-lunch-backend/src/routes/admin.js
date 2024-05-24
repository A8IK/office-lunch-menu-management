const express = require('express');
const { addMenu, viewChoices } = require('../controllers/adminController');
const router = express.Router();

router.post('/menu', addMenu);
// router.get('/choices', viewChoices);

module.exports = router;
