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
                count: products.length,
                // countByCategory: category, 
                data: products
                // url: "http://localhost:3001/product/detail/" + product.id + "/" 
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
                url: "http://localhost:3001/product/detail/" + product.id + "/"
                //TODO: URL DE IMAGEN
            })
        })
    },

    getCategories: (req, res) => {
        DB.Category.findAll()
            .then(category => {
                return res.json({
                    count: category.length,
                    data: category
                })
            })
    }
};

module.exports = controller;