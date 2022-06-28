const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname,'../database/users.json');
const users = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

const controller = {
    allUsers: (req, res) =>{
        res.send(users);
    },
    getUserId: (req, res)=>{
        const id = req.params.id;
        const user = users.find((element) => element.id === parseInt(id));
        if(user){
            res.send(user);
        }else{
            res.send('Not found')
        }
    },

    setUser: ()=>{},
};

module.exports = controller;