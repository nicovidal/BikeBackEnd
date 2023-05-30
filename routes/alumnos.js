const {Router}=require('express');
const { getAlumnos, eliminarAlumno, actualizarAlumno, getAlumnosRut } = require('../controllers/alumnos');
const router=Router();


router.get('/alumnos',getAlumnos);
router.get('/alumnos/rut/:rut',getAlumnosRut)




//borrar alumno


router.put('/alumnos/:id',actualizarAlumno)

router.delete('/alumnos/:id',eliminarAlumno)

module.exports=router;