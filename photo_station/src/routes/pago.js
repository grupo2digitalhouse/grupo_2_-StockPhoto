const express = require('express');
const path = require('path');
const router = express.Router();
const pagoController = require('../controllers/pagoController');

/*PAGO*/
router.get('/pago', pagoController.home);
module.exports = router;