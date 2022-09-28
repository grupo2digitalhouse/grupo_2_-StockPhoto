const path = require('path');
//const product = requiere // requerir json 
const db = require('../database/models/index');

const op = db.Sequelize.Op;


const productsControllers = {
    form: (req, res) => {
        res.render(path.resolve(__dirname,'../views/products/product.ejs'));
    },


    list: (req, res) => {
        db.Product.findAll({
           /* include: [ //inner join
                {
                    association: 'relcategory',
                },
                {
                    association: 'reluser',
                },
            ]*/
        })
            .then(product => {
                res.send(list)
                //res.render(path.resolve(__dirname,'../views/products/product.ejs'))
                /*res.render('productList',{'product': product})*/
            });
           
        },

    getProductId: (req,res)=>{
        const { id } = req.params;
        
        const product = product.find((e)=>e.id===parseInt(id));
    
        if(!product){
            res.sendStatus(404);
          
        }else{
            res.send(product);
        }
    
    },

    /*postProduct: (req,res)=>{
        const {
            product_name,
            descripcion,
            category,
            img
        }=req.body;
    
        const obj={
            id: ++prevId,
            product_name,
            descripcion,
            //category,
            //img
        };
    
        product.push(obj);
        res.send(obj);
    },*/

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
    }

   /* deleteProduct:(req,res)=>{
        const { id } = req.params;
       product = product.filter((e)=>e.id != parseInt(id));
        res.send(product);
    }*/


module.exports= productsControllers;

