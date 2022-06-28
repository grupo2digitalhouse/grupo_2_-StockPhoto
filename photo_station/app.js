//Constantes
const express = require('express');
const path = require('path');
const app = express();
//middlewares
app.use(express.static('public'));
//rutas: get, post, put, delete

//HOME
const routerMain = require('../photo_station/src/routes/main');
app.use(routerMain);

//Carro de compra
//productOffer
app.get('/offer', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'../photo_station/src/views/offer.html'));
})
//productCart
app.get('/cart', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'../photo_station/src/views/cart.html'));
})
app.get('/cart/:idImagen', (req, res)=>{
  res.send('Bienvenido a la imagen' + req.params.idImagen);
})
//productPayment
app.get('/payment', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'../photo_station/src/views/payment.html'));
})
//register
app.get('/register', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'../photo_station/src/views/register.html'));
})
//login
app.get('/login', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'../photo_station/src/views/login.html'));
})


//ruteo HEROKU
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));