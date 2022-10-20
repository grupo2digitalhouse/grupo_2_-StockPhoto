const DB = require("../database/models");

const controller = {
    listUsers: (req, res) => {
        DB.User.findAll()
            .then(users => {
                return res.json({
                    count: users.length,
                    data: users,                    
                })
                
            })
    },

    getUser: (req,res) => {
        DB.User
            .findByPk(req.params.id)
            .then(user => {
                return res.json({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    birthdate: user.birthdate,
                    id_country: user.id_country,
                    website: user.website,
                    //TODO: Una URL para la imagen de perfil (para mostrar la imagen).
                })
            })
    },

    listProducts: (req, res) => {
        DB.Product.findAll({
            include: [
                {
                    association: 'category',
                },
            ]
        })

        //sequalize count group by

        .then(products => {
            return res.json({
                // count: products.length,
                // countByCategory: category, 
                data: products, //TODO: COMO MUESTRO LA CATEGORIA?
                // category: products.category.category_name
                // detail: TODO: URL DEL PRODUCTO 
            })
        })
    },

    getProduct: (req, res) => {
        DB.Product.findByPk(req.params.id, {
            include: [
                {
                    association: 'category',
                },
            ]
        })
        .then(product => {
            return res.json({
                data: product,
                //TODO: URL DE IMAGEN Y CATEGORIA
            })
        })
    }
};



module.exports = controller;