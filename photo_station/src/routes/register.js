const express = require('express');
const path = require('path');
const router = express.Router();
const registerController = require('../controllers/registerController');

/*REGISTER*/
router.get('/register', registerController.home);
module.exports = router;