//Funcion : subir imagen

let multer = require('multer')

//que debe pasar con el arhivo(donde se guarda y como se debe llamar)
let almacenamiento = multer.diskStorage({

    //en que carpeta quiero q se almacenen las imagenes subidas 
    destination : (req, res, cb) =>{
        cb(null, './public/uploads/')
    },
    filename: (req, file, cb) => {
        console.log("OBJECTO FILE" , file)
        //ejemplo foto1.jpg
        //para extraer uso split y sacar el jpg y va a quedar
        //("foto1" , "jpg")
        const nameFile = file.originalname.split(".")[0]
        const fileExtension = file.originalname.split(".")[1]

        cb(null, `${nameFile}-${Date.now()}.${fileExtension}`)
    }
})
let maxSize = (1024 * 1024) * 5 // 5MB
let maxSizeMB = formatBytes(maxSize,2) 

// Opciones y reglas
const upload = multer({
    storage: almacenamiento,
    limits: {fileSize: maxSize},
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Sólo los formatos .png, .jpg y .jpeg son los permitidos'));
        }
    }
}).single("image")


// FUNCION: tamaño de archivo 
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;

    const sizes = ['Bytes', 'KB', 'MB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

module.exports ={
    multer,
    almacenamiento,
    maxSizeMB,
    upload
}