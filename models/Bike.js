const {Schema,model}=require('mongoose');


const BikeSchemas=Schema({

    name:{
        type:String,
        requiere:true
    },
    rut:{
        type:String,
        requiere:true,
        unique:true
    },
    carrer:{
        type:String,
        requiere:true
    },
    brand:{
        type:String,
        requiere:true
    },
    color:{
        type:String,
        requiere:true
    },
    ID:{
        type:String,
        requiere:true
    },

})

module.exports=model('Alumno',BikeSchemas)