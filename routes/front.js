const express = require('express');
const router = express.Router();

const frontController = require('../controllers/front');
//FRONT

//renderiza el archivo index, que se encuentra en la carpeta views
router.get('/', frontController.getIndex )

 
router.get('/about', frontController.getAbout )

router.get('/book', frontController.bookGet)

router.post('/book', frontController.bookPost)

router.get('/comprar', frontController.getComprar)

module.exports = router