const path = require('path');
const db = require('../database/models/index');

const op = db.Sequelize.Op;


const productsControllers = {
    crear: (req, res) => {

        res.render(path.resolve(__dirname,'../views/products/product.ejs'))
           
},

    productList: (req, res) => {
        db.Product.findAll()
            .then(product => {
                //retorna la vista listado productos
                res.render(path.resolve(__dirname,'../views/products/productList.ejs'))
            //res.render("listadoCategorias", {category:category});
            });
        },

    guardar: async (req, res) => {
            //tomo los datos del formulario
             const {
                name,
                description,
                category_id,
             } = req.body;
         
             const newProduct = {
                name,
                description,
                category_id,
             }
             try {
                 // de la base de datos db, accede ala tala y hace un create
                 await db.Product.create(newProduct);
                 res.redirect('productList');
                 // si creo el formulario muestra todas las peliculas
             } catch (error) {
                 console.log(error);
             }
         },
         
        update: async (req, res) => {
            // tiene que recibir todos los datos q le mando x body
            const {
                name,
                description,
                category_id,
            } = req.body;
        
            try {
                await db.Product.update(
                    { 
                       name,
                       description,
                       category_id,
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
                res.redirect('/product');
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

