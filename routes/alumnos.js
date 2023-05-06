const {Router}=require('express');
const { getAlumnos } = require('../controllers/alumnos');
const router=Router();


router.get('/alumnos',getAlumnos);


module.exports=router;