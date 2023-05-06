const {response}=require ('express');

const Bike = require('../models/Bike');


const getAlumnos=async(req,res=response)=>{

    const alumnos=await Bike.find()


    res.json({
        ok:true,
        alumnos
    })


};


module.exports = {getAlumnos};