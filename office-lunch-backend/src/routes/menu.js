const express = require('express');
const router = express.Router();
const { addMenuHandle, getMenuHandle } = require('../controller/menuController');

router.post('/menu', addMenuHandle);
router.get('/menu', getMenuHandle);

module.exports = router;
