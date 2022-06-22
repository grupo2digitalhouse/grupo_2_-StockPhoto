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
app.get('/offer', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/offer.html'));
})
//productCart
app.get('/cart', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/cart.html'));
})
//productPayment
app.get('/payment', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/payment.html'));
})

//register
app.get('/register', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/register.html'));
})


//ruteo HEROKU
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));