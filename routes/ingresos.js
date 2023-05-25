const {Router}=require('express');
const { crearIngreso, actualizarSalida } = require('../controllers/ingresos');
const router=Router();




router.post('/',crearIngreso)
router.put('/salida', actualizarSalida);

module.exports=router;