
require('dotenv').config();
const db = require('../models/connection.js');
const nodemailer = require('nodemailer');

//FRONT
 
const getIndex = (req,res) =>{
    // objeto con una propiedad llamada products, con un array de objetos
    //console.log(productos);
    let sql = "SELECT * FROM productos"

    db.query(sql,(err,data) =>{
        if(err) throw err 

       // console.log(data)

            //indica nombre del archivo hbs,objeto
        res.render('index',{
        titulo:"Mi pagina web",
        productos:data
        //tomo todos los productos del json
        //productos[0] : al empezar el json como un array, ponemos 0 para que tome desde el primer elemento
     
   })
    })
 
}

const bookPost = (req,res) =>{

     
    const info = req.body
    
   const transporter = nodemailer.createTransport({
        service: 'gmail',
       
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });


      const mailOptions = {
        from: info.email,
        to: 'agustina.flores.mail@gmail.com',
        subject: info.nombre,
        html: `
            <h1> RESERVA </h1>
            <h2>Nombre : ${info.nombre}</h2>
            <h2>Reserva para : ${info.cantidad} personas</h1>
            <h2>Telefono : ${info.telefono}</h2>
        `

       
      };

     
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(500).render('book',{
                mensaje:`Ha ocurrido el siguiente error ${error.message}`,
                mostrar:true,
                clase:'danger'
            })
        } else {
            res.status(200).render('book', {
            mensaje:"Mail enviado correctamente",
            mostrar:true,
            clase:'sucess'

           })
        }
      });
      
}

const bookGet = (req,res) =>{

    //indica nombre del archivo hbs,objeto
   res.render('book',{
    titulo:"Reservas"
   })
}

const getAbout = (req,res) =>{

    //indica nombre del archivo hbs,objeto
   res.render('about',{
    titulo:"Acerca de nosotros"
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
    bookPost,
    bookGet,
    getAbout,
    getComprar,
   
}