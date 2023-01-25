const express = require('express')
const app = express()
const hbs = require('hbs');
const path = require('path');
const rutasFront = require('./routes/front.js') 
const rutasBack = require('./routes/back.js')

hbs.registerPartials(__dirname + '/views/partials');//directorio hacia los parciales
const port = 3000

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