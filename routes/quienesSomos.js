const express = require('express');
const router = express.Router();
const model = require('./../models/empleados')

const getQuienes = async (req, res) => {
  const somos = await model.getAll();
  res.render("quienesSomos", {somos, title: "Quienes somos" });
};
 
router.get('/', getQuienes);
module.exports = router;