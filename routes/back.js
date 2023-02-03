const express = require('express');
const router = express.Router();

const backController = require('../controllers/back');
//BACK

router.get('/admin', backController.adminGet)
 
 router.get('/agregar-productos', backController.agregarProductoGet)
 router.post('/agregar-productos', backController.agregarProductoPOST)
 router.get('/editar-producto/:id', backController.editarProductoGet)
 router.post('/editar-producto/:id', backController.editarProductoPost)
 router.get('/borrar/:id', backController.borrarProductoGET)
 router.get('/login', backController.loginGet)
 
 
  module.exports=router