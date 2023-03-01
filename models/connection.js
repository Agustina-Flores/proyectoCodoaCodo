// get the client
const mysql = require('mysql2');
/*
// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER ,
  password:process.env.DB_PASSWORD,
  port: process.env.DB_PORT, 
  database:process.env.DB_DATABASE  
});
 
connection.connect(err => {
  if (err) throw err
  console.log('DB esta conectada')

   
});
*/

var pool = mysql.createPool({

  host: process.env.DB_HOST,
  user: process.env.DB_USER ,
  password:process.env.DB_PASSWORD,
  port: process.env.DB_PORT, 
  database:process.env.DB_DATABASE,
  connectTimeout: 30000
});

pool.getConnection(err => {
  if (err) throw err
  console.log('DB esta conectada')

   
});

// truco para mantener la conexión
setInterval(function () {
  pool.query('SELECT 1');
  //console.log("manteniendo viva la conexion")
}, 50000);


module.exports=pool;