const pool = require('../utils/bdd');

const getAll = async () => {
    const query = "SELECT * FROM ?? WHERE  eliminado = 0";
    const params = [process.env.T_USUARIOS];
    return await pool.query (query, params);
}
const getSingle = async (id) => {
    const query = "SELECT * FROM ?? WHERE id = ?"
    const params = [process.env.T_USUARIOS,  id];
    return await pool.query(query, params);
}
const create = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_USUARIOS, obj];
    return await pool.query(query, params);
}
const update = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_USUARIOS, obj, id];
    return await pool.query(query, params);
}
const del = async(id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_USUARIOS, id];
    return await pool.query(query, params);
}
const habilitar = async(id) => {
    const query = "UPDATE ?? SET habilitado = 1 WHERE id = ?";
    const params = [process.env.T_USUARIOS, id];
    return await pool.query(query, params);
}
const deshabilitar = async(id) => {
    const query = "UPDATE ?? SET habilitado = 0 WHERE id = ?";
    const params = [process.env.T_USUARIOS, id];
    return await pool.query(query, params);
}
const administrador = async(id) => {
    const query = "UPDATE ?? SET admin = 1 WHERE id = ?";
    const params = [process.env.T_USUARIOS, id];
    return await pool.query(query, params);
}
const noAdministrador = async(id) => {
    const query = "UPDATE ?? SET admin = 0 WHERE id = ?";
    const params = [process.env.T_USUARIOS, id];
    return await pool.query(query, params);
}



module.exports = {getAll, getSingle, create, update, del, habilitar, deshabilitar, administrador, noAdministrador};
