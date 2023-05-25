const {Router}=require('express');
const { crearIngreso, actualizarSalida, getIngresos} = require('../controllers/ingresos');
const router=Router();




router.post('/',crearIngreso)
router.put('/salida', actualizarSalida);
router.get('/listaIngresos',getIngresos);

module.exports=router;