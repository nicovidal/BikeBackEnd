const {Router}=require('express');
const { createVisitas, getVisitas, exitVisita } = require('../controllers/visitas');

const router=Router();


router.post('/newvisitas', createVisitas)
router.get('/visitas', getVisitas)
router.put('/salidavisita',exitVisita)


module.exports=router;