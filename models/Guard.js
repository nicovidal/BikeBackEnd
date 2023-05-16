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

GuardSchema.method('toJSON',function(){
    const {_v,_id,...object}=this.toObject();

    object.id=_id;
    return object;

})



module.exports=model('Guardia',GuardSchema);