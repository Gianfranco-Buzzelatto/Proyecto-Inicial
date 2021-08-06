const {schemas} = require('./schemas/contacto');

const validarMensaje = (req, res, next) => {
    const {error, value} = schemas.mensaje.validate(req.body);
    error ? res.render('contacto', {message:error.details[0].message}) : next();
}

module.exports = {validarMensaje};