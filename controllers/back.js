//BACK
//CONTROLADORES :LOGICA(funcion)
//MODELO : DATA
//VISTA : SOLO RUTA

require('dotenv').config();

const db = require('../models/connection')



 const adminGet = (req,res) =>{

   let sql = "SELECT* FROM productos"

    db.query(sql,(err,data) =>{
      if(err) throw err

      console.log(data)

      res.render('admin',{
      titulo:"Panel de administrador",
       productos:data
       
    })
 })
 }


 const agregarProductoGet =   (req,res) =>{
 
    
    console.log("estas en agregar-producto")
    res.render('agregar-productos',{
    
    })
 }

 const agregarProductoPOST = (req,res) =>{
   const info=req.body
   const sql = "INSERT INTO productos SET ?"

   db.query(sql,info,(err,data) =>{
      if(err) throw err

      console.log("Producto agregado")
      res.render('agregar-productos',{
         mensaje: "Producto agregado",
         titulo:"Agregar producto"
      })
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
    agregarProductoPOST,
    loginGet
}



