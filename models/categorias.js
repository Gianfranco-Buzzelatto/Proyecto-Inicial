const pool = require('../utils/bdd');


const cate = async (req, res) => {
    const query = "SELECT * FROM ?? WHERE eliminado = 0";
    const params = [process.env.T_CATEGORIAS]
    return await pool.query(query, params);
}
const getSingle = async(id) => {
    const query = "SELECT id, categoria FROM ?? WHERE id = ? AND eliminado = 0"
    const params = [process.env.T_CATEGORIAS, id]
    return await pool.query(query, params);
}
const create = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_CATEGORIAS, obj]
    return await pool.query(query, params);
}
const update = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_CATEGORIAS, obj, id];
    return await pool.query(query, params);
}
const del = async(id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_CATEGORIAS, id];
    return await pool.query(query, params);
}

module.exports = {cate, getSingle, create, update, del};
