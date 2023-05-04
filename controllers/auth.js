const { response } = require("express");
const Guardia=require('../models/Guard')
const Alumno=require('../models/Bike')

const createGuard = async (req, res = response) => {

/* 
  const { guardName, guardUser, guardPassword } = req.body; */

  try{

    const guardia = new Guardia(req.body);

    await guardia.save();

    res.status(201).json({
      ok: true,
      msg: "registrado nuevo guardia"
   
    });
  

  }catch(error){
    res.status(500).json({
      ok:false,
      msg:'No se creo'
    })
  }
}
 

  



const createBike = async (req, res = response) => {
/*   const {name,rut,carrer,brand,color,ID,} = req.body; */

  try{
    
    const alumno = new Alumno(req.body);

    await alumno.save();


    res.json({
      ok: true,
      msg: "Nuevo Alumno agregado"
    });



  }catch(error){
    res.status(500).json({
      ok:false,
      msg:'No se creo'
    })
  }


};
const loginUser = (req, res = response) => {


  const { guardUser, guardPassword } = req.body;

  res.json({
    ok: true,
    msg: "login",
    guardUser,
    guardPassword,
  });
};



module.exports = {
  createGuard,
  createBike,
  loginUser,
};
