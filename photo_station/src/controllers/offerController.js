const path = require('path');
const controller = {
    home: (req, res) => {
        res.render(path.join(__dirname,'../views/offer.ejs'));
    }
};

module.exports = controller;