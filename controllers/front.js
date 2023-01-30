
require('dotenv').config();
const db = require('../models/connection.js');

//FRONT
 
const getIndex = (req,res) =>{
    // objeto con una propiedad llamada products, con un array de objetos
    //console.log(productos);
    let sql = "SELECT * FROM productos"

    db.query(sql,(err,data) =>{
        if(err) throw err 

        console.log(data)

            //indica nombre del archivo hbs,objeto
        res.render('index',{
        titulo:"Mi pagina web",
        productos:data
        //tomo todos los productos del json
        //productos[0] : al empezar el json como un array, ponemos 0 para que tome desde el primer elemento
     
   })
    })
 
}

const getAbout = (req,res) =>{

    //indica nombre del archivo hbs,objeto
   res.render('about',{
    titulo:"Acerca de nosotros"
   })
}

const getBook = (req,res) =>{

    //indica nombre del archivo hbs,objeto
   res.render('book',{
    titulo:"Reservas"
   })
}

const getComprar =(req,res) =>{

    //indica nombre del archivo hbs,objeto
   res.render('comprar',{
    titulo:"Como Comprar"
   })
}

module.exports =
{
    getIndex,
    getAbout,
    getComprar,
    getBook
}