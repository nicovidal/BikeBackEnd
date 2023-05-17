const {Router}=require('express');
const { getAlumnos, eliminarAlumno, actualizarAlumno } = require('../controllers/alumnos');
const router=Router();


router.get('/alumnos',getAlumnos);



//borrar alumno


router.put('/alumnos/:id',actualizarAlumno)

router.delete('/alumnos/:id',eliminarAlumno)

module.exports=router;