const express = require('express');

const productsControllers = require('../controllers/productsControllers');
const router = express.Router();

router.get('/product/list',productsControllers.productList);  // muestra lista de productos

router.get('/product/crear',productsControllers.crear); //carga formulario de productos

router.post('/product/crear',productsControllers.guardar);

router.post('/product/edit/:id',productsControllers.update);
//para eliminar. no uso delete como nombre del controler xq delete es palabra resevada
router.post('/product/delete/:id', productsControllers.borrar);


module.exports=router;
