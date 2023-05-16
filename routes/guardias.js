const {Router}=require ('express');
const { getGuardias } = require('../controllers/guardias');
const router=Router();

router.get('/guardias',getGuardias);

module.exports=router;