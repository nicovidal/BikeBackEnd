const {Schema,model}=require('mongoose');



const AdminSchemas=Schema({

    adminName:{
        type:String,
        requiere:true
    },
    adminUser:{
        type:String,
        requiere:true,
        unique:true
    },
    adminPassword:{
        type:String,
        requiere:true
    },

})

module.exports=model('Admin',AdminSchemas)