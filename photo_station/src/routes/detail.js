const express = require('express');
const path = require('path');
const router = express.Router();
const detailController = require('../controllers/detailController');

/*DETAIL*/
router.get('/detail', detailController.home);
module.exports = router;