const path = require('path');
const controller = {
    home: (req, res) => {
        res.render(path.resolve(__dirname,'../views/products/pago.ejs'));
    }
};

module.exports = controller;