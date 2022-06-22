//Constantes
const express = require('express');
const path = require('path');
const app = express();
//middlewares
app.use(express.static('public'));
//rutas: get, post, put, delete
app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/index.html'));
})


//Carro de compra
//productOffer
app.get('/productOffer', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/productOffer.html'));
})
//productCart
app.get('/productCart', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/productCart.html'));
})
//productPayment
app.get('/productPayment', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/productPayment.html'));
})


//ruteo HEROKU
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));