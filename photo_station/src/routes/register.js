const express = require('express');
const path = require('path');
const router = express.Router();
const registerController = require('../controllers/registerController');

/*DETAIL*/
router.get('/register', registerController.home);
module.exports = router;