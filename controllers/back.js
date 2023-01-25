//BACK
//CONTROLADORES :LOGICA(funcion)
//MODELO : DATA
//VISTA : SOLO RUTA
const productos = require('./data/productos.json');

 const adminGet = (req,res) =>{

    res.render('admin',{
       titulo:"Panel de administrador",
       productos: productos[0].data
    })
 }

 const agregarProductoGet =   (req,res) =>{
 
    console.log("estas en agregar-producto")
    res.render('agregar-productos',{
    
    })
 }


 const editarProductoGet = (req,res) =>{
 
    console.log("estas en editar-producto")
    res.render('editar-producto',{
    
    })
 }

 const loginGet = (req,res) =>{
 
    console.log("estas en login")
    res.render('login',{
    
    })
 }


module.exports={
    adminGet,
    agregarProductoGet,
    editarProductoGet,
    loginGet
}



