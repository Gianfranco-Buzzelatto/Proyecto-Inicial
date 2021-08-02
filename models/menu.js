const pool = require('../utils/bdd');


const getAll = async() => {
    const query = "SELECT p.nombre, p.stock, p.precio, p.descripcion, p.id, c.categoria, pI.uid, c.categoria AS categoriaCategorias FROM ?? AS p JOIN ?? AS pI ON p.id = pI.id_producto JOIN ?? AS c ON p.id_categorias = c.id WHERE p.eliminado = 0";
    const params = [process.env.T_PRODUCTOS, process.env.T_IMAGENESPRODUCTOS, process.env.T_CATEGORIAS]
    return await pool.query(query, params);
}
const getSingle = async(id) => {
    const query = "SELECT p.nombre, p.stock, p.precio, p.descripcion, p.id, c.categoria, pI.uid, c.categoria AS categoriaCategorias FROM ?? AS p JOIN ?? AS pI ON p.id = pI.id_producto JOIN ?? AS c ON p.id_categorias = c.id WHERE p.id = ? AND p.eliminado = 0"
    const params = [process.env.T_PRODUCTOS,process.env.T_IMAGENESPRODUCTOS ,process.env.T_CATEGORIAS, id]
    return await pool.query(query, params);
}
const create = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_PRODUCTOS, obj]
    return await pool.query(query, params);
}

const update = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_PRODUCTOS, obj, id];
    return await pool.query(query, params);
}
const updateImage = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id_producto = ?";
        const params = [process.env.T_IMAGENESPRODUCTOS, obj, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

const del = async(id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_PRODUCTOS, id];
    return await pool.query(query, params);
}
const delImg = async(id) => {
    try{
        const query = "UPDATE ?? SET eliminado = 1 WHERE id_producto = ?";
        const params = [process.env.T_IMAGENESPRODUCTOS, id];
        return await pool.query(query, params);
    } catch(error){
        console.error(error);
}}



module.exports = {getAll, getSingle, create, update, del, delImg, updateImage};