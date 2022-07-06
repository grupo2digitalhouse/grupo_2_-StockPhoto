const express = require('express');
const path = require('path');
const router = express.Router();
const profileController = require('../controllers/profileController');

/*LOGIN*/
router.get('/profile', profileController.home);
module.exports = router;