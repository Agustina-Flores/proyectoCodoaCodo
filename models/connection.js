// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || '192.168.100.8',
  user: process.env.DB_USER || 'username',
  password:process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT  || 3306, 
  database:process.env.DB_DATABASE || 'proyectocodoacodo',
});
 
connection.connect(err => {
  if (err) throw err
  console.log('DB esta conectada')

   
});

// truco para mantener la conexión
setInterval(function () {
  connection.query('SELECT 1');
 console.log("manteniendo viva la conexion")
}, 50000);


module.exports=connection;