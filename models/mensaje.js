 const pool = require ('./../utils/bdd');

 const message = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_MENSAJE, obj]
    return await pool.query(query, params);
}
const mostrarMsjs = async () => {
    const query = "SELECT * FROM ?? WHERE eliminado = 0";
    const params = [process.env.T_MENSAJE];
    return await pool.query (query, params);
}
const mostrarMsj = async (id) => {
    const query = "SELECT * FROM ?? WHERE id = ?"
    const params = [process.env.T_MENSAJE, id];
    return await pool.query(query, params);
}
const del = async(id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_MENSAJE, id];
    return await pool.query(query, params);
}

module.exports = {message, mostrarMsjs, mostrarMsj, del};