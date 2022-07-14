const express = require('express');
const path = require('path');
const router = express.Router();
const detailController = require('../controllers/detailController');
const imgController = require('../controllers/imgController')

/*HOME DETAIL CART*/
router.get('/detail', detailController.home);
/*RENDER IMG*/
router.get('/details', imgController.getAllImages);
router.get('/detail/:id', imgController.getImageId);
router.post('/detail', imgController.postImage);

module.exports = router;