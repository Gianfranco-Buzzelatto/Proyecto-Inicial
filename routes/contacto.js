const express = require('express');
const { message } = require('../models/mensaje');
const router = express.Router();

const showMensaje = (req, res) => {
  res.render('contacto', {title:'Enviar mensaje'});
}; 

const Message = async (req, res) => {
    const contacto = req.body;
  const mensaje = {
    nombre: contacto.nombre,
    apellido: contacto.apellido,
    email: contacto.email,
    celular: contacto.celular,
    mensaje: contacto.mensaje,
}
console.log(mensaje)
const add = await message(mensaje);
res.redirect('/');

};


router.get('/', showMensaje);
router.post('/mensaje', Message);
module.exports = router;