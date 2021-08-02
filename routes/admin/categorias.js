const express = require('express');
const router = express.Router();
const model = require('./../../models/categorias');


const get = async (req, res) => {
    const categoria = await model.cate();
    res.render('admin/adminCategorias', {categoria, title: "Administrador"});
}
const showCreate = (req, res) => {
    res.render('admin/createcategorias', {title: "Administrador"});
}

const create = async (req, res) => {
    const categoria = req.body;
    const {insertId} = await model.create(categoria)
    res.redirect('/admin/categorias');
}

const showUpdate = async (req, res) =>{
    const {id} = req.params;
    const [categoria] = await model.getSingle(id);
    res.render('admin/updateCategorias', {categoria, title: "Administrador"}); 
}

const update = async (req, res) => {
    const {id} = req.params;
    const categoria = req.body;
    const {insertId} = await model.update(id, categoria);
    res.redirect('/admin/categorias')
}

const del = async (req, res) => {
    const {id} = req.params;
    const messageId = await model.del(id);
    res.redirect('/admin/categorias');
}
 
router.get('/', get);
router.get('/create', showCreate);
router.post('/create', create);
router.get('/update/:id', showUpdate);
router.post('/update/:id', update);
router.get('/delete/:id', del);
module.exports = router; 