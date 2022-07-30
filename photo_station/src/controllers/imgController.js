const path = require('path');
let prevId=1;
let images = [
    {
        "id": 1,
        "name":"flor_violeta",
        "image":"",
        "category":"Naturaleza",
        "escale":"5398px3598px",
    },
    {
        "id": 2,
        "name":"muñeco_de_nieve",
        "image":"",
        "category":"Invierno",
        "escale":"5000px5000px",
    },
]

const imgController = {
    getAllImages: (req,res)=>{
        const name = req.query.name;
        if(name){
            const imageName = images.filter((e)=>e.name.toLowerCase().includes(name.toLowerCase()));
        imageName.length ? res.send(imageName) : res.sendStatus(400);
        }else{
            res.send(images);
        }
    },
    getImageId: (req,res)=>{
        const { id } = req.params;
        const image = images.find((e)=>e.id===parseInt(id))
        if(!image){
            res.sendStatus(404);
        }else{
            res.send(image);
        }
    },
    postImage:(req,res)=>{
        const{ name, image, category, escale } = req.body;  
        const obj={
            id: ++prevId,
            name,
            image,
            category,
            escale,
        };
        images.push(obj);
        res.send(obj);
    },
}


module.exports = imgController;