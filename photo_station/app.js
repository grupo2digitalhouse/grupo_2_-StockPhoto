//Constantes
const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan');

//ROUTERS
const routerMain = require('../photo_station/src/routes/main');//3000/
const routerPago = require('./src/routes/pago');//3000/
const routerDetail = require('./src/routes/detail');
const routerOffer = require('./src/routes/offer');
const routerRegister = require('./src/routes/register');
const routerLogin = require('./src/routes/login')
const routerProfile = require('./src/routes/profile')
const routerCambioContra = require('./src/routes/cambioContra');


//EJS-CONFIG
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'./public')));

//APP.SET
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(routerMain);
app.use(routerOffer);
app.use(routerPago);
app.use(routerDetail);
app.use(routerOffer);
app.use(routerRegister);
app.use(routerLogin);
app.use(routerProfile);
app.use(routerCambioContra);


//Ruteo LOCAL
app.listen(3001, ()=> console.log("Servidor escuchando en puerto 3001"));
//ruteo HEROKU
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));