const path = require('path');
const controller = {
    home: (req, res) => {
        res.render(path.resolve(__dirname,'../views/products/detail.ejs'));
    }
};

module.exports = controller;