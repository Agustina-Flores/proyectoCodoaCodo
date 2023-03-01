const express = require('express')
const app = express()
const hbs = require('hbs');
const path = require('path');
const rutasFront = require('./routes/front.js') 
const rutasBack = require('./routes/back.js')
const session = require('express-session')
require('./views/helpers/helpers.js')


//Sesiones mediante cookies

app.use(session({
  secret: process.env.SESION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: { zmaxAge: 300000 } //DURA 5 minutos
}))

hbs.registerPartials(__dirname + '/views/partials');//directorio hacia los parciales
const port = 3000

//middlewares para tomar los datos del formulario
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


app.set('view engine','hbs');

//creamos arreglo, y adjunto rutas con join
app.set('views',[
path.join('./views/front'),
path.join('./views/back'),
path.join('./views')
])

app.use(express.static('public')); //indica carpeta public para considerar archivos estaticos

app.use('/' , rutasFront)
app.use('/', rutasBack)

app.use((req,res,next) =>{
   res.status(404).render('404',{
       titulo:"404 - No encontrado"
      })
})

 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})