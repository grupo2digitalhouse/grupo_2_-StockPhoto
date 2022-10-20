
const path = require('path');
const db = require('../database/models/index');

const op = db.Sequelize.Op;

const userController = {
    home: (req, res) => { //formulario de registro
                res.render(path.resolve(__dirname,'../views/users/register.ejs'));
    },
    guardar: async (req, res) => {
        //tomo los datos del formulario
         const {
            username,
            first_name,
            last_name,
            email,
            image,
           // password,
         } = req.body;
     
         const newUser = {
            username,
            first_name,
            last_name,
            email,
            image: req.file? req.file.filename: image,
           // password,
         }
         try {
             // de la base de datos db, accede a la tabla y hace un create
             await db.User.create(newUser);
             res.redirect('/login')
             //('/register/detail')
             // si creo el formulario muestra todas las peliculas
         } catch (error) {
             console.log(error);
         }    
     },
     login: (req, res) => {
        res.render(path.resolve(__dirname,'../views/users/login.ejs'));
    },
     detail: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
             res.render(path.resolve(__dirname,'../views/user/userDetail.ejs'),{'user': user})
         /*} catch (error) {
             console.log(error);*/
         });
     },

    edit: async (req,res)=>{
        const user = await db.User.findByPk(req.params.id);
        res.render(path.resolve(__dirname,'../views/user/userEdit.ejs'), {user})
     
    },

     update: async (req, res) => {
        const {
            username,
            first_name,
            last_name,
            email,
            image,
        } = req.body;
    
        try {
            await db.User.update(
                { 
                    username,
                    first_name,
                    last_name,
                    email,
                    image: req.file? req.file.filename: image,
                },
                {
                    where: { // filtro del update
                        id: req.params.id,
                    }
                }
            );
            res.redirect(`/product/detail/${req.params.id}`);
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
            // se puede poner una vista q diga se elimino 
            res.redirect('/product/List');
        } catch (error) {
            console.log(error);
        }
    },
    
};
module.exports = userController;