const path = require('path');
//const product = requiere // requerir json 
let prevId=2;


const productsControllers = {
    form: (req, res) => {
        res.render(path.resolve(__dirname,'../views/products/product.ejs'));
    },

    getAllProduct : (req,res)=>{
        const product = req.query.product;
    
        if(product){
            const productName = product.filter((e) => e.product.toLowerCase().includes(product.toLowerCase()));
            productName.length ? res.send(productName) : res.sendStatus(400);
        }else{
            res.send(product);
        }
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

    postProduct: (req,res)=>{
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
    },

    putProduct:(req,res)=>{
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
        }
    },

    deleteProduct:(req,res)=>{
        const { id } = req.params;
       product = product.filter((e)=>e.id != parseInt(id));
        res.send(product);
    }
};

module.exports= productsControllers;

