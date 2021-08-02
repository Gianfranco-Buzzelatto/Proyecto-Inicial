const express = require('express');
const router = express.Router();
const { auth } = require ('./../models/registro');
const sha1 = require ('sha1');
const {validarLogin} = require ('./../middlewares/usuarios');


const showLogin = (req, res) => 
res.render('login',{title: 'Login'})

const login = async (req, res) => {
  let {username, contraseña} = req.body;
  contraseña = sha1(contraseña);
  const logged = await auth(username, contraseña);
  if (logged.length === 0) {
    res.render('login', { title :'Incorrecto', message: '* Usuario o contraseña incorrectos.  Intente nuevamente'})}
   else {
  const [{id, admin}] = logged;
  console.log(id);
  req.session.usuario = id;
  req.session.admin = admin;
  res.redirect('/')
  }
}


router.get('/', showLogin);
router.post('/', validarLogin , login)
module.exports = router;