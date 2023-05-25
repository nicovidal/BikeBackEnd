const {Router}=require('express');
const { createVisitas, getVisitas } = require('../controllers/visitas');

const router=Router();


router.post('/newvisitas', createVisitas)
router.get('/visitas', getVisitas)
module.exports=router;