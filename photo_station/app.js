//Constantes
const express = require('express');
const path = require('path');
const app = express();

//EJS-CONFIG
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'./public')));

//HOME
const routerMain = require('../photo_station/src/routes/main');
app.use(routerMain);
//OFFER
const routerOffer = require('./src/routes/offer');
app.use(routerOffer);
//USERS
const routerUser = require('./src/routes/users')
app.use(routerUser);









//Carro de compra
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

//PASARELA DE PAGO
//revisarSeleccion
app.get('/seleccion', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'../photo_station/src/views/detail_v2.html'));
})
//miCompra
app.get('/pago', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'../photo_station/src/views/pago_v2.html'));
})
//comprobantes
app.get('/comprobante', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'../photo_station/src/views/comprobante_v2.html'));
})






//ruteo HEROKU
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));