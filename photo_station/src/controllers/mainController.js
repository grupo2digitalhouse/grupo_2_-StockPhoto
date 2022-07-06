const path = require('path');
const controller = {
    home: (req, res) => {
        res.render(path.resolve(__dirname,'../views/users/index.ejs'));
    }
};

module.exports = controller;