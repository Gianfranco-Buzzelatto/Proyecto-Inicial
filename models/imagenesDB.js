const pool = require ('./../utils/bdd');

const imagenesEmpleados = (obj) =>
      pool.query("INSERT INTO ?? SET ?",[process.env.T_IMAGENESEMPLE, obj]).then(response => response).catch(err => console.error(err));

const imagenesProductos = async (obj) => 
      pool.query("INSERT INTO ?? SET ?",[process.env.T_IMAGENESPRODUCTOS, obj]).then(response => response).catch(err => console.error(err));

module.exports = {imagenesEmpleados, imagenesProductos };