const path = require('path');
const controller = {
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname,'../views/register.html'));
    }
};

module.exports = controller;