const express = require('express');
const router = express.Router();
const model = require('./../../models/menu')
const modelCategorias = require('./../../models/categorias')
const multer = require('multer');
const config = {dest: `./public/temp`};
const upload = multer(config);
const service = require('./../../services/productos');

const get = async (req, res) => {
    const menu = await model.getAll();
    res.render('admin/adminProductos', {menu, title: 'Admin - Productos'} );
}
const showCreate = async (req, res) => {
    const categorias = await modelCategorias.cate();
    res.render('admin/createProductos', {categorias, title: 'Admin de productos'});
}

const createP = async (req, res) => {
    const idImg = await service.createProductos(req.body, req.file);
    res.redirect('/admin/productos');
}
const showUpdate = async (req, res) =>{
    const {id} = req.params;
    const [producto] = await model.getSingle(id);
    const categorias = await modelCategorias.cate();
    res.render('admin/updateProductos', {categorias, producto, title: "Administrador"}); 
}

const update = async (req, res) => { 
    const idImg = await service.updateProductos(req.params.id, req.body, req.file);
    res.redirect('/admin/productos')
}

const del = async (req, res) => {
    const {id} = req.params;
    const messageId = await model.del(id);
    const messageImg = await model.delImg(id);
    res.redirect('/admin/productos');
}

router.get('/', get);
router.get('/create', showCreate);
router.post('/create',upload.single("imagen") ,createP);
router.get('/update/:id', showUpdate);
router.post('/update/:id',upload.single("imagen") , update);
router.get('/delete/:id', del);
module.exports = router;