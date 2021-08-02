const pool = require('../utils/bdd');

const getAll = async () => {
    const query = "SELECT e.id, e.nombre, e.apellido, e.email, e.celular, e.ocupacion, eI.uid AS uuid FROM ?? AS e JOIN ?? AS eI ON e.id = eI.id_empleados WHERE e.eliminado = 0";
    const params = [process.env.T_EMPLEADOS, process.env.T_IMAGENESEMPLE];
    return await pool.query (query, params);
}
const getSingle = async (id) => {
    const query = "SELECT e.id, e.nombre, e.apellido, e.email, e.celular, e.ocupacion, eI.uid AS uuid FROM ?? AS e JOIN ?? AS eI ON e.id = eI.id_empleados WHERE e.eliminado = 0 AND e.id = ?"
    const params = [process.env.T_EMPLEADOS,process.env.T_IMAGENESEMPLE, id];
    return await pool.query(query, params);
}
const create = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_EMPLEADOS, obj];
    return await pool.query(query, params);
}

const update = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id = ?";
        const params = [process.env.T_EMPLEADOS, obj, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}
const updateImage = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id_empleados = ?";
        const params = [process.env.T_IMAGENESEMPLE, obj, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

const del = async(id) => {
    try{
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_EMPLEADOS, id];
    return await pool.query(query, params);
} catch(error){
    console.error(error);
}}

const delImg = async(id) => {
    try{
        const query = "UPDATE ?? SET eliminado = 1 WHERE id_empleados = ?";
        const params = [process.env.T_IMAGENESEMPLE, id];
        return await pool.query(query, params);
    } catch(error){
        console.error(error);
}}




module.exports = {getAll, getSingle, create, update, del, delImg, updateImage };