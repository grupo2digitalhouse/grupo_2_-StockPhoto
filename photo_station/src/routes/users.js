const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/users', userController.allUsers);
router.get('user/:id', userController.getUserId);
router.post('/users',)

module.exports = router;
