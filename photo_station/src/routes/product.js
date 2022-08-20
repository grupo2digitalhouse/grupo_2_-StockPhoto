const express = require('express');

const productsControllers = require('../controllers/productsControllers');
const router = express.Router();

router.get('/product',productsControllers.form); //carga formulario de productos

router.get('/products',productsControllers.getAllProduct); // muestra lista de productos

router.get('/products/:id',productsControllers.getProductId);

router.post('/product',productsControllers.postProduct);

router.put('/products/:id',productsControllers.putProduct);

router.delete('/products/:id',productsControllers.deleteProduct);

module.exports=router;
