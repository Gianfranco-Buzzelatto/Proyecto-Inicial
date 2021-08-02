const Joi = require('@hapi/joi');

const schemas = {
    login: Joi.object().keys({
        username: Joi.string().required().messages({
            "string.empty" : "El usuario es obligatorio para acceder"
        }),
        contraseña: Joi.string().min(6).max(10).required().messages({
            "string.empty" : "La contraseña es obligatoria para acceder",
            "string.min" : "La contraseña debe tener a menos 6 caracteres",
            "string.max" : "La contraseña debe tener como maximo 16 caracteres"
        }),
    }),
    registro: Joi.object().keys({
        nombre:Joi.string().required().messages({
            "string.empty" : "El nombre es obligatorio"
        }),
        apellido:Joi.string().required().messages({
            "string.empty" : "El apellido es obligatorio"
        }),
        email:Joi.string().email().required().messages({
            "string.empty" : "El email es obligatorio"
        }),
        username:Joi.string().required().messages({
            "string.empty" : "El usuario es obligatorio"
        }),
        contraseña:Joi.string().min(6).max(10).required().messages({
            "string.empty" : "La contraseña es obligatoria",
            "string.min" : "La contraseña debe tener a menos 6 caracteres",
            "string.max" : "La contraseña debe tener como maximo 16 caracteres"
        }),
        direccion:Joi.string().required(),
        celular:Joi.number().required(),
        fecha_de_nacimiento:Joi.number().integer().min(1950).max(2006)
    })
}


module.exports = {schemas}