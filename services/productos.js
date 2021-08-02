const {imagenesProductos} = require ('./../models/imagenesDB');
const model = require ('./../models/menu');
const {imgFile} = require ('./../utils/fileHandler');

const createProductos = async (body, file) => {
   try{
       const {insertId : id_producto} = await model.create(body); 
       const uid = imgFile(file);
       const obj = {id_producto, uid};
       const {insertId : idImg} = await imagenesProductos(obj);
       return idImg;
       } catch (error){
       console.error(error);
   }
}
const updateProductos = async (id, body, file) => {
    try{
        const  id_producto = await model.update(id, body); 
        if(file){
            const uid = imgFile(file);
            const obj = {uid};
            const idImg = await model.updateImage(id, obj);
            return idImg;
        }
        else{
            return id_producto
        }
        } catch (error){
        console.error(error);
    }
 }

module.exports = {createProductos, updateProductos};