const pool = require('./../utils/bdd');

const getAll = async (id_usuario) => {
    const query = "SELECT c.id_producto, c.id, p.nombre, p.descripcion, p.precio, p.stock FROM ?? AS c JOIN ?? AS p ON c.id_producto = p.id WHERE c.id_usuario = ? AND c.eliminado = 0";
    const params = [process.env.T_CARRITO, process.env.T_PRODUCTOS, id_usuario];
    return await pool.query (query, params); 
}

const insertCarrito = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_CARRITO, obj];
    return await pool.query (query, params);
}

const delCarrito = async (id_usuario) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id_usuario = ?";
    const params = [process.env.T_CARRITO, id_usuario];
    return await pool.query (query, params); 
}

const delPCarrito = async(id_producto) => {
    try{
    const query = "UPDATE ?? SET eliminado = 1 WHERE id_producto = ?";
    const params = [process.env.T_CARRITO, id_producto];
    return await pool.query(query, params);
} catch(error){
    console.error(error);
}}

module.exports = {getAll, insertCarrito, delCarrito, delPCarrito }