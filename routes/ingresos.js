const {Router}=require('express');
const {  crearIngreso } = require('../controllers/ingresos');
const router=Router();




router.post('/',crearIngreso)

module.exports=router;