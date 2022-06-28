let express = require('express');
let router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/:idImagen', cartController.agregarImagen);

module.exports = router;