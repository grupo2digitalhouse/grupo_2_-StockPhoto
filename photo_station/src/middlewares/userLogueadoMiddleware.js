// middllware de app para mostrar partes de la barra de navegacion dependiendo de si esta logeado o no 

function userLogueadoMiddleware(req, res , next) {

    res.locals.logueado = false;

    if(req.session && req.session.userLogueado){

        res.locals.logueado =true;
        
        res.locals.logueado = req.session.userLogueado;
    }
    next();
}

module.exports = userLogueadoMiddleware;