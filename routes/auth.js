const {Router}=require('express');
const router=Router();
 
 
 
router.post('/newg',(req,res)=>{
    console.log('prueba');
    res.json({
        ok:true,
        msg:'newGuard'
    })
});

router.post('/newa',(req,res)=>{
    console.log('prueba');
    res.json({
        ok:true,
        msg:'newBike'
    })
});

router.post('/',(req,res)=>{
    console.log('prueba');
    res.json({
        ok:true,
        msg:'login'
    })
});



module.exports=router;