const path = require('path');
const controller = {
    home: (req, res) => {
        res.render(path.resolve(__dirname,'../views/users/register.ejs'));
    }
};

module.exports = controller;