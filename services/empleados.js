 const {imagenesEmpleados} = require ('./../models/imagenesDB');
 const model = require ('./../models/empleados');
 const {imgFile} = require ('./../utils/fileHandler');

 const createEmpleado = async (body, file) => {
    try{
        const {insertId : id_empleados} = await model.create(body); 
        const uid = imgFile(file);
        const obj = {id_empleados, uid};
        const {insertId : idImg} = await imagenesEmpleados(obj);
        return idImg;
        } catch (error){
        console.error(error);
    }
}
 const updateEmpleado = async (id, body, file) => {
    try{
        const  id_empleados = await model.update(id, body); 
        if(file){
            const uid = imgFile(file);
            const obj = {uid};
            const idImg = await model.updateImage(id, obj);
            return idImg;
        }
        else{
            return id_empleados
        }
        } catch (error){
        console.error(error);
    }
}
 
 module.exports = {createEmpleado, updateEmpleado};