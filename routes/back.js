const express = require('express');
const router = express.Router();

const backController = require('../controllers/back');
//BACK

router.get('/admin', backController.adminGet)
 
 router.get('/agregar-productos', backController.agregarProductoGet)
 router.post('/agregar-productos', backController.agregarProductoPOST)
  router.get('/editar-producto', backController.editarProductoGet)
 
 router.get('/login', backController.loginGet)
 
 
  module.exports=router