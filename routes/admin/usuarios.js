const express = require('express');
const router = express.Router();
const model = require('./../../models/usuarios');


const get = async (req, res) => {
    const usuarios = await model.getAll();
    res.render('admin/adminUsuarios', {usuarios, title: "Administrador"});
}
const getUsuario = async (req, res) => {
    const id = req.params.id;
    const [usuarios] = await model.getSingle(id);
    console.log(usuarios, id);
    res.render ('admin/adminUsuario', {usuarios, title: 'Usuario'});
}

const showUpdate =  async(req, res) =>{
    const {id} = req.params;
    const [usuarios] = await model.getSingle(id);
    res.render('admin/updateUsuarios', {usuarios, title: "Administrador"});
}

const update = async (req, res) => {
    const {id} = req.params;
    const usuarios = req.body;
    const {insertId} = await model.update(id, usuarios);
    res.redirect('/admin/usuarios')
}

const del = async (req, res) => {
    const {id} = req.params;
    const messageId = await model.del(id);
    res.redirect('/admin/usuarios');
}
const habil = async (req, res) => {
    const {id} = req.params;
    const messageId = await model.habilitar(id);
    res.redirect('/admin/usuarios');
}
const deshabil = async (req, res) => {
    const {id} = req.params;
    const messageId = await model.deshabilitar(id);
    res.redirect('/admin/usuarios');
}
const administrador = async (req, res) => {
    const {id} = req.params;
    const messageId = await model.administrador(id);
    res.redirect('/admin/usuarios');
}
const noAdministrador = async (req, res) => {
    const {id} = req.params;
    const messageId = await model.noAdministrador(id);
    res.redirect('/admin/usuarios');
}

 
router.get('/', get);
router.get('/single/:id', getUsuario);
router.get('/update/:id', showUpdate);
router.post('/update/:id', update);
router.get('/delete/:id', del);
router.get('/habilitar/:id', habil);
router.get('/deshabilitar/:id', deshabil);
router.get('/administrador/:id', administrador);
router.get('/noAdministrador/:id', noAdministrador);

module.exports = router; 