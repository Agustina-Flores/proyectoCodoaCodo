//BACK
//CONTROLADORES :LOGICA(funcion)
//MODELO : DATA
//VISTA : SOLO RUTA

require('dotenv').config();

const db = require('../models/connection')



 const adminGet = (req,res) =>{

   const logueado = req.session.logueado // seria true si esta logueado o seria null

   if(logueado)
   {

      let sql = "SELECT * FROM productos"

      db.query(sql,(err,data) =>{
        if(err) throw err
    
        res.render('admin',{
        titulo:"Panel de administrador",
        logueado: logueado,// true
          usuario: req.session.nombreUsuario,
         productos:data
         
      })
   })
   }
    else
    {
      res.redirect('/login')
    }
 }


 const agregarProductoGet =   (req,res) =>{
 
   const logueado = req.session.logueado // seria true si esta logueado o seria null


    if(logueado)
   {

      let sql = "SELECT * FROM productos"

      db.query(sql,(err,data) =>{
        if(err) throw err
    
        res.render('agregar-productos',{
        
        logueado: logueado,// true
          usuario: req.session.nombreUsuario,
         productos:data
         
      })
   })
   }
    else
    {
      res.redirect('/login')
    }
 }

 const agregarProductoPOST = (req,res) =>{
   const info= req.body
   const sql = "INSERT INTO productos SET ?"
 
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
   
   res.render("editar-producto", {
      mensaje: "Producto actualizado",
    
   })
})

 }

 const borrarProductoGET = (req,res) =>{

   const id =req.params.id
   const sql = "DELETE from productos WHERE id = ?"
   db.query(sql,id, (err,data) =>{
      if(err) throw err
      console.log(data.affectedRows + " registro borrado")
      res.redirect('/admin');
   })
 }



 const loginGet = (req,res) =>{
 
    console.log("estas en login")
    res.render('login',{
    
    })
 }

 const loginPost = (req,res) =>{

   const usuario = req.body.usuario
   const clave = req.body.clave

   if(!usuario == "" && !clave == "")
   {
      const sql = "SELECT * FROM cuentas WHERE usuario = ? AND clave = ?"
      

      db.query(sql, [usuario,clave] , (err,data) =>{

         if(data.length > 0)
         {
            req.session.logueado = true // Creamos una propiedad llamada "logueado" para que el objeto session almacene el valor "TRUE" y es para usarlo en el parcial de "header"
            req.session.nombreUsuario = usuario


            //si todo esta bien q redirija al admin
            res.redirect('/admin')

         } else {
            res.render('login' , {

               titulo:"Login",
               error: "Nombre de usuario o contraseña incorrectos"
            })
         }
 
      })
   }  else  {
      res.render("login", {
         titulo: "Login",
         error: "Por favor escribe un nombre de usuario y clave"
      })
   }

 }

module.exports={
    adminGet,
    agregarProductoGet,
    agregarProductoPOST,
    editarProductoGet,
    editarProductoPost,
    borrarProductoGET,
    loginGet,
    loginPost
}



