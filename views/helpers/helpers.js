
const hbs=require('hbs');


hbs.registerHelper('listado' , descripcion =>{

  

    let arrayDescripcion = descripcion.split(',')
    //['pan,carne','lechuga']
    
    let html = "<ul></ul>"
    for(item of arrayDescripcion)

    {

        html += `<li>${item}</li>`
    }
        return `${html}</ul>`
})