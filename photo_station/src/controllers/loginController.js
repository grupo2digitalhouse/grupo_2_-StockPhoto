const path = require('path');
const controller = {
    home: (req, res) => {
        res.render(path.resolve(__dirname,'../views/users/login.ejs'));
    }
};

module.exports = controller;