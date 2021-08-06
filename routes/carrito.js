const express = require("express");
const router = express.Router();
const model = require('./../models/carrito')

const getCarrito = async(req, res) => {
    const carrito = await model.getAll(req.session.usuario);
    let precioF = 0;
    carrito.forEach( item => {
        precioF += item.precio  
    });
    res.render('carrito', {title: 'Carrito', carrito, precioF });
}
const compra = async (req, res) => {
    const msgElim = await model.delCarrito(req.session.usuario);
    res.redirect('/menu')
}
 const delPCarrito = async (req, res) => {
    const {id_producto} = req.params;
    const messageId = await model.delPCarrito(id_producto);
    console.log(id_producto)
    res.redirect('/carrito');
}

router.get('/', getCarrito)
router.get('/compra', compra)
router.get('/compras/:id_producto', delPCarrito)
module.exports = router;