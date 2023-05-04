const {Router}=require('express');
const {check}=require('express-validator')
const router=Router();
 
const {createGuard, createBike, loginUser}=require('../controllers/auth')
 
 
router.post('/newg',
    [
        check('guardName','nombre obligatorio').not().isEmpty(),
        check('guardUser','usuario obligatorio').not().isEmpty(),
        check("guardPassword", "El password debe de ser de 6 caracteres").isLength({ min: 6})
    ],createGuard);

router.post('/newa',createBike);

router.post('/',
    [
        check("guardUser", "El user es obligatorio").not().isEmpty(),
        check("guardPassword", "El password debe de ser de 6 caracteres").isLength({
          min: 6,
        })
    ],loginUser);



module.exports=router;