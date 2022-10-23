const express = require('express');
const path = require('path');
const router = express.Router();
const APIController = require('../controllers/APIController');

/*LOGIN*/
router.get('/api/users', APIController.listUsers);
router.get('/api/users/:id', APIController.getUser);
router.get('/api/products/', APIController.listProducts);
router.get('/api/products/:id', APIController.getProduct);
module.exports = router;