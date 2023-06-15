const {Router}=require('express');
const { crearIngreso, actualizarSalida, getIngresos, getIngresoPorRut} = require('../controllers/ingresos');
const router=Router();




router.post('/newIngreso',crearIngreso)
router.put('/salida', actualizarSalida);
router.get('/listaIngresos',getIngresos);
router.get('/ingresoPorRut',getIngresoPorRut)

module.exports=router;