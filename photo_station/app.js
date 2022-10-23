//Constantes
const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const cookies = require('cookie-parser');


const userLogueadoMiddleware = require('./src/middlewares/userLogueadoMiddleware')
//EJS-CONFIG
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'./public')));

//APP.SET
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(session({
    secret:"Secreto",
    resave: false,
    saveUninitialized: false,
}))

app.use(cookies());
app.use(userLogueadoMiddleware)
//ROUTERS
const routerMain = require('../photo_station/src/routes/main');//3000/
//const routerPago = require('./src/routes/pago');//3000

const routerOffer = require('./src/routes/offer');

const routerUsers = require('./src/routes/users');

const routerProduct = require('./src/routes/product');
const routerProfile = require('./src/routes/profile');
const { autocompleteCommand } = require('cli');


//HOME//
app.use(routerMain);
//OFFER//
app.use(routerOffer);
//PASARELA DE DETALLECART-PAGO-COMPROBANTE//
//app.use(routerDetail);
//app.use(routerPago);

//REGISTER//
app.use(routerUsers);
//PROFILE//
app.use(routerProfile);


app.use(routerProduct)

//Ruteo LOCAL
app.listen(3001, ()=> console.log("Servidor escuchando en puerto 3001"));
//ruteo HEROKU
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'), ()=>console.log('Servidor escuchando'))