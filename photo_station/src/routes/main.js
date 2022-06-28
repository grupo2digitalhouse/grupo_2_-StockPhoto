const express = require('express');
const path = require('path');
const router = express.Router();

/*HOME*/
router.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'../views/index.html'));
});
module.exports = router;