const path = require('path');
const controller = {
    home: (req, res) => {
        res.render(path.resolve(__dirname,'../views/users/cambioContrasena.ejs'));
    }
};

module.exports = controller;