
const {validationResult} = require('express-validator');

let prevId=2;
let contacts = [
    {
        id: 1,
        name: "Pedro",
        mail: "pedro@mail.com",
        fav: false,
    },
    {
        id: 2,
        name: "Julieta",
        mail: "juli@mail.com",
        fav: false,
    },
]

const contactsControlers = {
    getAllContacts:(req,res)=>{
        const name = req.query.name;
    
        if(name){
            const contactName = contacts.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
            contactName.length ? res.send(contactName) : res.sendStatus(400);
        }else{
            res.send(contacts);
        }
    },

    getContactId: (req,res)=>{
        const { id } = req.params;
        
        const contact = contacts.find((e)=>e.id===parseInt(id));
    
        if(!contact){
            res.sendStatus(404);
            //res.send("No esta che")
        }else{
            res.send(contact);
        }
    
    },

    getForm: (req,res) => {
        res.render('contactform');
    },

    postContact: (req,res)=>{
        const{
            name,
            mail,
            fav
        }=req.body;
    
        const errors = validationResult(req);
        //res.send(errors);
        if(errors.isEmpty()){
            const obj={
                id: ++prevId,
                name,
                mail,
                fav: fav ? fav : false,
            };
            contacts.push(obj);
            res.send(obj);
        }else{
            res.render('contactform',{
                'errors': errors.array(),
                'prev': req.body,
            })
        }
    },
     putContact:(req,res)=>{
        const { id } = req.params;
        const { name,mail,fav } = req.body;
    
        const contact = contacts.find((e)=>e.id===parseInt(id));
    
        if(!contact){
            res.sendStatus(404);
        }else{
            contact.name = name;
            contact.mail = mail;
            contact.fav = fav;
            res.send(contact);
        }
    },
    deleteContact:(req,res)=>{
        const { id } = req.params;
        contacts = contacts.filter((e)=>e.id != parseInt(id));
        res.send(contacts);
    }
};


module.exports=contactsControlers;