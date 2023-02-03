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
   const info= req.body
   const sql = "INSERT INTO productos SET ?"
   console.log("agregarProductoPost")
   db.query(sql,info,(err,data) => {
      if(err) throw err

      console.log("Producto agregado")
      res.render("agregar-productos", {
         mensaje: "Producto agregado",
         titulo:"Producto agregado a la lista"
      })
   })

 }
 const editarProductoGet = (req,res) =>{
 
   const id = req.params.id
   const sql = "SELECT * FROM productos WHERE id = ?"

   db.query(sql, id,(err,data) =>{
      if(err) throw err
      console.log(data[0])
      if(data.length > 0)
      {
         res.render('editar-producto',{
            producto:data[0]
      })
      }else{
        res.send(
        `<h1>No existe el producto con id ${id} </h1>
        <a href="/admin"> Volver al listado de productos </a>
        `
        )
         } 
      })
 
 
 }

 const editarProductoPost = (req,res) =>{

 const id = req.params.id
 const producto = req.body

const sql = "UPDATE productos SET ? WHERE id = ?"

db.query(sql, [producto, id], (err,data) =>{

   if(err) throw err 
   console.log("ACTUALIZAR DATA",data)
   console.log(`${data.affectedRows} registro actualizado`)
   
   res.render("agregar-productos", {
      mensaje: "Producto actualizado",
    
   })
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
    agregarProductoPOST,
    editarProductoGet,
    editarProductoPost,
    loginGet
}



