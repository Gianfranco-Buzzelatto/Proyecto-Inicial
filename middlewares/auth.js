const verifyUsuario = (req, res, next) => {
    if(req.session.usuario){
        next();
    }
    else {
        res.render('loginN', {title:'Logueate', message: 'Es necesario loguearte para continuar'})
    }
};
const verifyAdmin = (req, res, next) => {
    if (req.session.admin == 1){
        next();
    }
    else {
        res.render('noAutorizado', {title: 'Unathorized ❌', message: 'Debes ser administrador para acceder'})
    }
}

module.exports = {verifyUsuario, verifyAdmin};  