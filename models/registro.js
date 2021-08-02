const pool = require('../utils/bdd');

const crear = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_USUARIOS, obj]
    return await pool.query(query, params);
}
const verify = async(uid) => {
    const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacion_correo = ?"
    const params = [process.env.T_USUARIOS, uid];
    return await pool.query (query, params);
    
}
const auth = async (username, contraseña) => {
    const query = "SELECT id, admin FROM ?? WHERE username = ? AND contraseña = ? AND habilitado = 1 AND eliminado = 0"
    const params = [process.env.T_USUARIOS, username, contraseña]
    return await pool.query (query, params);
}
module.exports = {crear, verify, auth };