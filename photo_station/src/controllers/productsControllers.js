const path = require('path');
const db = require('../database/models/index');

const op = db.Sequelize.Op;


const productsControllers = {

    productList: (req, res) => {
        db.Product.findAll()
            .then(product => {
                //retorna la vista listado productos
                res.render(path.resolve(__dirname,'../views/products/productList.ejs'),{'product': product})
            });
        },

    detail: (req, res) => {
           db.Product.findByPk(req.params.id)
           .then(product => {
                res.render(path.resolve(__dirname,'../views/products/productDetail.ejs'),{'product': product})
            /*} catch (error) {
                console.log(error);*/
            });
        },
           
    crear: (req, res) => {
        db.Category.findAll()
        .then(category => {
            //res.send(category)
        res.render(path.resolve(__dirname,'../views/products/product.ejs'), {'category': category})
        })
},

    guardar: async (req, res) => {
            //tomo los datos del formulario
             const {
                name,
                description,
                image,
                price,
             } = req.body;
         
             const newProduct = {
                name,
                description,
                image: req.file? req.file.filename: image,
                price,
             }
             try {
                 // de la base de datos db, accede a la tabla y hace un create
                 await db.Product.create(newProduct);
                 res.redirect('/product/List')
                 // si creo el formulario muestra todas las peliculas
             } catch (error) {
                 console.log(error);
             } 
         },

         edit: async (req,res)=>{
            const product = await db.Product.findByPk(req.params.id);
            res.render(path.resolve(__dirname,'../views/products/productEdit.ejs'), {product})
         
        },

    update: async (req, res) => {
            // tiene que recibir todos los datos q le mando x body
            const {
                name,
                description,
                price,
            } = req.body;
        
            try {
                await db.Product.update(
                    { 
                       name,
                       description,
                       price,
                    },
                    {
                        where: { // filtro del update
                            id: req.params.id,
                        }
                    }
                );
                res.redirect(`/product/detail/${req.params.id}`);
            } // catch xq hago modificacion
             catch (error) {
                console.log(error);
            }
        
        },
         // el metodo que elimina se llama destroy. RECORDAR EL WHERE igual al del update}
         //el metodo que lleva la promesa lleva el await
        
        borrar: async (req,res) =>{
            try {
               await db.Product.destroy({
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
    /*putProduct:(req,res)=>{
        const { id } = req.params;
        const { product_name, descripcion, category, img} = req.body;
    
        const product = product.find((e)=>e.id===parseInt(id));
    
        if(!product){
            res.sendStatus(404);
        }else{
            product.product_name = product_name;
            product.descripciion = descripcion;
            product.category = category;
            product.img = img;
            res.send(product);
        }*/
    



module.exports= productsControllers;

