const {Schema,model}=require('mongoose');


const GuardSchema=Schema({
    guardName:{
        type:String,
        requiere:true
    },
    guardUser:{
        type:String,
        requiere:true,
        unique:true
    },
    guardPassword:{
        type:String,
        requiere:true
    },
});



module.exports=model('Guardia',GuardSchema);