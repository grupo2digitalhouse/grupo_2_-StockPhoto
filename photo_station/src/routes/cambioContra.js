const express = require('express');
const path = require('path');
const router = express.Router();
const cambioContraController = require('../controllers/cambioContraController');

/*REGISTER*/
router.get('/cambio', cambioContraController.home);
module.exports = router;