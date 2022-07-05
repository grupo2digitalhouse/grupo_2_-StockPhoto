const path = require('path');
const controller = {
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname,'../views/offer.html'));
    }
};

module.exports = controller;