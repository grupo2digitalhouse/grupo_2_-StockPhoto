const express = require('express');

const multer = require('multer');
const path = require('path');
const productsControllers = require('../controllers/productsControllers');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
      cb(null, path.join(__dirname,'../../public/images/photos'))
    },
    filename: (req, file, cb) =>{
       let newFilename = 'photo-' + Date.now() + path.extname(file.originalname);
       cb(null, newFilename);
    }
  });


const upload = multer({ storage: storage })

router.get('/product/list',productsControllers.productList);  // muestra lista de productos
router.get('/product/detail/:id',productsControllers.detail); //ruta detalle

router.get('/product/crear', productsControllers.crear); //carga formulario de productos
router.post('/product/crear', upload.single('image'),productsControllers.guardar);

router.get('/edit/:id', productsControllers.edit);
router.post('/product/edit/:id',productsControllers.update); // actualiza
//para eliminar. no uso delete como nombre del controler xq delete es palabra resevada
router.post('/product/delete/:id', productsControllers.borrar);


module.exports=router;
