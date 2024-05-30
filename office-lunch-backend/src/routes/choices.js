const express = require('express');
const router = express.Router();
const { getChoice, getChoices } = require('../controller/choiceController');

router.post('/choices', getChoice);
router.get('/choices', getChoices);

module.exports = router;
