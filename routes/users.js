const express = require('express');
const router = express.Router();

const usuarios = [
  {
    id: 1,
    nombre: 'Gian',
    apellido: 'Buzzelatto'
  },
  {
    id: 2,
    nombre: 'Leo',
    apellido: 'Messi'
  }
];

const userss = (req, res) => {
  res.render ('users', {usuarios});
}

const single = (req, res) => {
  const {id} = req.params;
  console.log(id);
  const usuario = usuarios.find((user) => user.id == id);
  console.log(usuario)
  res.render('single', {usuario});
}

router.get('/', userss);
router.get('/single/:id', single)

module.exports = router;