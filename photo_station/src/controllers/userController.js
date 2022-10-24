
const path = require('path');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models/index');

const op = db.Sequelize.Op;

const userController = {
    home: (req, res) => { //formulario de registro
                res.render(path.resolve(__dirname,'../views/users/register.ejs'));
    },
   
    guardar:  async (req, res) => {
        let userInDB = await db.User.findOne({ where:{email: req.body.email}})

        if(userInDB){
            return res.render(path.resolve(__dirname,'../views/users/register.ejs'),{errors:{email:{msg:'Este usuario ya exste'}
        },
    old:req.body});
    }
      const errores = validationResult(req);

        if (errores.isEmpty()) {
         const {
            username,
            first_name,
            last_name,
            email,
            image,
            birthdate,
            id_country,
            website,
                       
         } = req.body;

         const newUser = {
            username,
            first_name,
            last_name,
            email,
            image: req.file? req.file.filename: image,
            birthdate,
            id_country,
            website,
            password: bcryptjs.hashSync(req.body.password, 10),
         }
        
             await db.User.create(newUser);
             res.redirect('/login');

        } else {      // Hay errores, volvemos al formulario con los mensajes
            res.render(path.join(__dirname, '../views/users/register.ejs'), {
                errors: errores.mapped(), old:req.body });}
     },


     
    
     login: (req, res) => {
        res.render(path.resolve(__dirname,'../views/users/login.ejs'));
    },

    userList :(req,res)=>{
        db.User.findAll()
            .then(user =>{
                return res.render(path.join(__dirname,'../views/users/userList.ejs'),{'user':user});
            });
    },

    detail: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
             res.render(path.resolve(__dirname,'../views/users/userDetail.ejs'),{'user': user})
         });
     },

    edit: async (req,res)=>{
        const user = await db.User.findByPk(req.params.id);
        res.render(path.resolve(__dirname,'../views/users/userEdit.ejs'), {user})
     
    },

   
     update: async (req, res) => {
        const {
            image,
            id_country,
            birthdate,
            website,
        } = req.body;
    
        try {
            await db.User.update(
                {   
                    password: bcryptjs.hashSync(req.body.password, 10),
                     image: req.file ? req.file.filename : image,
                    id_country,
                    birthdate,
                    website,
                },
                {
                    where: { // filtro del update
                        id: req.params.id,
                    }
                }
            );
            res.redirect(`/register/detail/${req.params.id}`);
        } 
         catch (error) {
            console.log(error);
        }
    
    },

    borrar: async (req,res) =>{
        try {
           await db.User.destroy({
                where: {
                    id: req.params.id
                }
            });
            
            res.redirect('/usuarios');
           
        } catch (error) {
            console.log(error);
        }
    },

    logueado: async (req,res)=>{
        
        let user = await db.User.findOne({
                where:{email: req.body.email }})
            if (user){
  
                let igualar = await bcryptjs.compareSync(req.body.password, user.password )
    
                if(igualar){
                    req.session.userLogueado = user;                       
                    //return res.redirect('/profile');    
                    return res.redirect('/userProfile');       
                    
                    }else{
                        return res.render(path.join(__dirname, '../views/users/login.ejs'),{
                            errors:{
                                password:{ msg:'la contraseña es incorrecta'}
                            }                         
                        });
                    } 
            }else{
               return res.render(path.join(__dirname, '../views/users/login.ejs'),{
                    errors:{
                        email:{
                            msg:'El Email es invalido'
                        }
                    }                  
                });
            }
    },

    profile: (req,res)=>{

        console.log('estas en profile');

        console.log(req.session);

       return res.render(path.join(__dirname,'../views/users/userDetail.ejs'), {

        user: req.session.userLogueado
       });

    },
    logout:(req,res)=>{

        req.session.destroy();
        res.cookie('userCookie', null, { maxAge: 1 });
        return res.redirect('/')

    }


};
    
module.exports = userController;