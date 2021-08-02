const express = require("express");
const router = express.Router();
const { getSingle, getAllHabilitados} = require("../models/menu");
const model = require('./../models/usuarios');

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

router.get('/', all);
router.get('/single/:id', single);

module.exports = router;
 