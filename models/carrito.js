const pool = require('./../utils/bdd');

const getAll = async () => {
    const query = "SELECT * FROM ?? WHERE  eliminado = 0";
    const params = [process.env.T_CARRITO];
    return await pool.query (query, params); 
}

const insertCarrito = async (obj) => {
    const query = "SELECT * FROM ?? WHERE  eliminado = 0";
    const params = [process.env.T_CARRITO];
    return await pool.query (query, params); 
}

const delCarrito = async (id) => {
    const query = "SELECT * FROM ?? WHERE  eliminado = 0";
    const params = [process.env.T_CARRITO];
    return await pool.query (query, params); 
}


module.exports = {getAll, insertCarrito, delCarrito}