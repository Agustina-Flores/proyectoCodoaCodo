const express = require('express');
const app = express()
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');//directorio hacia los parciales
const port = 3000

app.set('view engine','hbs');

app.use(express.static('public')); //indica carpeta public para considerar archivos estaticos

//renderiza el archivo index, que se encuentra en la carpeta views
app.get('/', (req,res) =>{

    //indica nombre del archivo hbs,objeto
   res.render('index',{
    titulo:"Mi pagina web"
   })
})

 
app.get('/about', (req,res) =>{

    //indica nombre del archivo hbs,objeto
   res.render('about',{
    titulo:"Acerca de nosotros"
   })
})

app.get('/book', (req,res) =>{

    //indica nombre del archivo hbs,objeto
   res.render('book',{
    titulo:"Reservas"
   })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})