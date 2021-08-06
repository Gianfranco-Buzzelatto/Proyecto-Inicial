const express = require("express");
const router = express.Router();
const { getSingle, getAllHabilitados} = require("../models/menu");
const model = require('./../models/carrito');
const {verifyUsuario} = require('./../middlewares/auth')

const all = async (req, res) => {
  const menu = await getAllHabilitados();
  res.render("menu", { menu, title: "Menu" });
};

const single = async (req, res) => {
  const { id } = req.params;
  const [producto] = await getSingle(id);
  console.log(producto);
  res.render("menuSingle", { title: "Menu", producto });
};
const insertaCarrito = async(req, res) => {
  const {id : id_producto} = req.params;
  const id_usuario = req.session.usuario;
  const obj = {
    id_usuario,
    id_producto
  }
  const {insertId} = await model.insertCarrito(obj);
  res.redirect('/carrito')
  console.log(insertId)
}

router.get('/', all);
router.get('/single/:id', single);
router.get('/carrito/:id', verifyUsuario, insertaCarrito);
module.exports = router;
 