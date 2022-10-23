const path = require('path');
const controller = {
    home: (req, res) => {
        res.render(path.resolve(__dirname,'../views/index.ejs'));
    }
};

module.exports = controller;