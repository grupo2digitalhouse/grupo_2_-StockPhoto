const express = require('express');

const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
      cb(null, path.join(__dirname,'../../public/images/profile'))
    },
    filename: (req, file, cb) =>{
       let newFilename = 'avatar-' + Date.now() + path.extname(file.originalname);
       cb(null, newFilename);
    }
  });


const upload = multer({ storage: storage })

router.get('/register', userController.home); //carga formulario registro
router.post('/register/crear', upload.single('image'), userController.guardar);

router.get('/register/detail/:id',userController.detail); //ruta detalle

router.get('/register/edit/:id', userController.edit);
router.post('/register/edit/:id', userController.update); // actualiza

router.post('/register/delete/:id', userController.borrar);

router.get('/login', userController.login);


//router.get('/product/list',productsControllers.productList);  // muestra lista de productos








module.exports=router;

