const {response}=require('express');

const Guard=require('../models/Guard');

const getGuardias=async(req,res=response)=>{

    const guardias = await Guard.find()

    res.json({
        ok:true,
        guardias
    })

}


module.exports={getGuardias};