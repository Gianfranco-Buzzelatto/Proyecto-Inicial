const Joi = require('@hapi/joi');

const schemas = {
    mensaje: Joi.object().keys({
        nombre:Joi.string().required().messages({
            "string.empty" : "El nombre es obligatorio"
        }),
        apellido:Joi.string().required().messages({
            "string.empty" : "El apellido es obligatorio"
        }),
        email:Joi.string().email().required().messages({
            "string.empty" : "El email es obligatorio"
        }),
        celular:Joi.number().required(),
        mensaje:Joi.string().required().messages({
            "string.empty" : "Indique el mensaje"
        })
    })
}
module.exports = {schemas}