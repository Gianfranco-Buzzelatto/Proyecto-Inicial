const express = require('express');
const router = express.Router();
const model = require('./../../models/empleados');
const multer = require('multer');
const config = {dest: `./public/temp`};
const upload = multer(config);
const service = require('./../../services/empleados');


const get = async (req, res) => {
    const empleados = await model.getAll();
    res.render('admin/adminEmpleados', {empleados , title: "Administrador"});
}
const showCreate = (req, res) => {
    res.render('admin/createEmpleados');
}

const createE = async (req, res) => {
    const idImg = await service.createEmpleado(req.body, req.file);
    res.redirect('/admin/empleados');
}

const showUpdate =  async(req, res) =>{
    const {id} = req.params;
    const [empleado] = await model.getSingle(id);
    res.render('admin/updateEmpleados', {empleado, title: "Administrador"});
}

const update = async (req, res) => {
    const idImg = await service.updateEmpleado(req.params.id, req.body, req.file);
    res.redirect('/admin/empleados');
}

const del = async (req, res) => {
    const {id} = req.params;
    const messageId = await model.del(id);
    const messageImg = await model.delImg(id);
    res.redirect('/admin/empleados');
}

router.get('/', get);
router.get('/create', showCreate, createE);
router.post('/create', upload.single("imagen"), createE);
router.get('/update/:id', showUpdate);
router.post('/update/:id', upload.single("imagen"), update);
router.get('/delete/:id', del);
module.exports = router; 