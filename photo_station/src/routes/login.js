const express = require('express');
const path = require('path');
const router = express.Router();
const loginController = require('../controllers/loginController');

/*LOGIN*/
router.get('/login', loginController.home);
module.exports = router;