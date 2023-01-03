const express = require('express');
const app = express()
var hbs = require('hbs');

const productos = require('./data/food.json');

hbs.registerPartials(__dirname + '/views/partials');//directorio hacia los parciales
const port = 3000

app.set('view engine','hbs');

app.use(express.static('public')); //indica carpeta public para considerar archivos estaticos

//renderiza el archivo index, que se encuentra en la carpeta views
app.get('/', (req,res) =>{

    // objeto con una propiedad llamada products, con un array de objetos
    //console.log(productos);

    //indica nombre del archivo hbs,objeto
   res.render('index',{
    titulo:"Mi pagina web",
    productos: productos.products //tomo todos los productos del json

     
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

app.get('/comprar', (req,res) =>{

    //indica nombre del archivo hbs,objeto
   res.render('comprar',{
    titulo:"Como Comprar"
   })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})