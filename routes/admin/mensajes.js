const express = require('express');
const { mostrarMsj , mostrarMsjs } = require('./../../models/mensaje');
const router = express.Router();

const getMsj = async (req, res) => {
  const mensajes = await mostrarMsjs();
  console.log(mensajes);
  res.render('admin/adminMensajes', {mensajes, title: 'Mensajes'});
  console.log(mensajes);
}
const showSingleMsj = async (req, res) => {
  const id = req.params.id;
  const [mensaje] = await mostrarMsj(id);
  console.log(mensaje, id);
  res.render('admin/adminMensaje', {mensaje, title: 'Mensaje'});
}

router.get('/', getMsj);
router.get('/:id', showSingleMsj);
module.exports = router;