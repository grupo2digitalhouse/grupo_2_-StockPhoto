const express = require('express');
const path = require('path');
const router = express.Router();
const offerController = require('../controllers/offerController');

/*DETAIL*/
router.get('/offer', offerController.home);
module.exports = router;