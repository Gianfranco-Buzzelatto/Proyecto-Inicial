const express = require ('express');
const router = express.Router();
const { getAll, getSingle } = require ('./../models/usuarios');

const getUsuarioS = async (req, res) => {
    const usuarios = await getAll();
    console.log(usuarios);
    res.render('usuarios', {usuarios, title: 'Usuarios'});
}
const getUsuario = async (req, res) => {
    const id = req.params.id;
    const [usuario] = await getSingle(id);
    console.log(usuario, id);
    res.render ('usuario', {usuario, title: 'Usuario'});
}

router.get('/', getUsuarioS);
router.get('/single/:id', getUsuario);
module.exports = router;