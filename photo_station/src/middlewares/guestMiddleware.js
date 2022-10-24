function guestMiddleware(req, res, next){

    if (req.session.userLogueado){
        return res.redirect('/');
    }
    next();
};

module.exports = guestMiddleware;
