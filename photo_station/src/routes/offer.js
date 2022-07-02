const express = require('express');
const path = require('path');
const router = express.Router();
const offerController = require('../controllers/offerController');

/*OFFER*/
router.get('/', offerController.home);
module.exports = router;