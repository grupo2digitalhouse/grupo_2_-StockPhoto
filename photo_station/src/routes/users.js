const express = require('express');

const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const router = express.Router();

// config multer
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


const validations =[
  
  body('username').notEmpty().withMessage('Debe Completar el usuario'),
  body('first_name').notEmpty().withMessage('Debe Completar el Nombre'),
  body('last_name').notEmpty().withMessage('Debe Completar el Apellido'),
  body('email').notEmpty().withMessage('Debe Completar el Email').bail()
      .isEmail().withMessage('Debe ser un email valido'),
  body('password').notEmpty().withMessage('Debe Completar la contraseña'),
  
     
];

const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/register', guestMiddleware, userController.home); //carga formulario registro
router.post('/register/crear', upload.single('image'), validations, userController.guardar);

router.get('/usuarios', userController.userList); // listado de usuarios
router.get('/register/detail/:id',userController.detail); //ruta detalle



router.get('/register/edit/:id', userController.edit);
router.post('/register/edit/:id', upload.single('image'), userController.update); // actualiza

router.post('/user/delete/:id', userController.borrar);

//logueo
router.get('/login', guestMiddleware, userController.login);
router.post('/login', /*validateRegister,*/userController.logueado);
router.get('/userProfile', userController.profile);


//out
router.get('/logout', userController.logout);









module.exports=router;

