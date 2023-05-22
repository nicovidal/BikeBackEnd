const {Router}=require ('express');
const { getGuardias, actualizarGuardia, eliminarGuardia } = require('../controllers/guardias');

const router=Router();

router.get('/guardias',getGuardias);


router.put('/guardias/:id',actualizarGuardia)

router.delete('/guardias/:id',eliminarGuardia)

module.exports=router;