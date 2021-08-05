const express = require('express');
const { message } = require('../models/mensaje');
const { avisoDeMensajes } = require('../services/mail');
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
avisoDeMensajes({
  mail: process.env.T_MAILGIAN,
  asunto:`Hola Gian, tenes una nueva consulta de ${mensaje.nombre}, ${mensaje.apellido}!`,
  cuerpo: `<h3>El mensaje es: <br> ${mensaje.mensaje}</h3>
  <p>Los datos de ${mensaje.nombre} son: <br> - Email :${mensaje.email} <br>-Celular:${mensaje.celular}.</p>`
})
res.redirect('/');

};


router.get('/', showMensaje);
router.post('/mensaje', Message);
module.exports = router;