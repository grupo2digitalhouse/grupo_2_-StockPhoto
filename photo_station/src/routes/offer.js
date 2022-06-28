let express = require('express');
let router = express.Router();
const offerController = require('../controllers/offerController');

router.get('/', offerController);

module.exports = router;