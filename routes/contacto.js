const express = require('express');
const router = express.Router();
const { message } = require('../models/mensaje');
const { avisoDeMensajes } = require('../services/mail');
const {validarMensaje} = require ('./../middlewares/contacto');

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
  cuerpo: `<h2>El mensaje es: </h2> <br> <h3>${mensaje.mensaje}</h3>
  <p>Los datos de ${mensaje.nombre} son: <br> - Email :${mensaje.email} <br>-Celular:${mensaje.celular}.</p>`
})
res.redirect('/');

};

router.get('/', showMensaje);
router.post('/mensaje' ,validarMensaje, Message);
module.exports = router;