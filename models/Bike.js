const {Schema,model}=require('mongoose');


const BikeSchemas=Schema({

    registerName:{
        type:String,
        requiere:true
    },
    registerRut:{
        type:String,
        requiere:true,
        unique:true
    },
    registerCarrer:{
        type:String,
        requiere:true
    },
    registerBrand:{
        type:String,
        requiere:true
    },
    registerColor:{
        type:String,
        requiere:true
    },
    registerID:{
        type:String,
        requiere:true
    },

})

module.exports=model('Alumno',BikeSchemas)
