
const hbs=require('hbs');


hbs.registerHelper('listado' , descripcion =>{

    //pan,carne,lechuga

    let arrayDescripcion = descripcion.split(',')
    let html = "<ul></ul>"
    for(item of arrayDescripcion)

    {

        html += `<li>${item}</li>`
    }
        return `${html}</ul>`
})