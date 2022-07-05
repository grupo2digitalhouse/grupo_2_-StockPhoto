//Constantes
const express = require('express');
const path = require('path');
const app = express();

//ROUTERS
const routerMain = require('../photo_station/src/routes/main');
const routerUser = require('./src/routes/users');
const routerPago = require('./src/routes/pago');
const routerDetail = require('./src/routes/detail');
const routerOffer = require('./src/routes/offer');
const routerRegister = require('./src/routes/register');
const routerLogin = require('./src/routes/login')



//EJS-CONFIG
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'./public')));

//APP.SET
app.use(routerMain);
app.use(routerOffer);
app.use(routerUser);
app.use(routerPago);
app.use(routerDetail);
app.use(routerOffer);
app.use(routerRegister);
app.use(routerLogin);



//ruteo HEROKU
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));