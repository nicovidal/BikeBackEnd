const { response } = require("express");
const Guardia=require('../models/Guard')
const Alumno=require('../models/Bike')

const createGuard = async (req, res = response) => {

  const { guardUser, guardPassword } = req.body; 
  try{

    let guardia = await Guardia.findOne({guardUser})
    
    if(guardia){
      return res.status(400).json({
        ok:false,
        msg:'Un guardia ya existe con ese usuario'
      });
    }

    guardia = new Guardia(req.body);

    await guardia.save(); 

    res.status(201).json({
      ok: true,
      msg: "registrado nuevo guardia",
      uid:guardia.id,
      name:guardia.guardName
   
    });
  

  }catch(error){
    res.status(500).json({
      ok:false,
      msg:'No se creo'
    })
  }
}
 
const createBike = async (req, res = response) => {

  const {rut} = req.body; 

  try{

    let alumno = await Alumno.findOne({rut});
    if(alumno){
      return res.status(400).json({
        ok:false,
        msg:'El Alumno ya existe'
      })
    }
    
    alumno = new Alumno(req.body);

    await alumno.save();


    res.json({
      ok: true,
      msg: "Nuevo Alumno agregado",
      uid:alumno.id,
      name:alumno.name
    });



  }catch(error){
    res.status(500).json({
      ok:false,
      msg:'No se creo'
    })
  }


};
const loginUser = async (req, res = response) => {


  const { guardUser, guardPassword } = req.body;

  try{

    const guardia = await Guardia.findOne({guardUser})
    
    if(!guardia){
      return res.status(400).json({
        ok:false,
        msg:'Su usuario de guardia no a sido creado'
    });
  }

  
/*   const validPassword=(guardPassword===guardia.guardPassword);

  if(!validPassword){
    return res.status(400).json({
      ok:false,
      msg:'Password incorreto'
    })
  }; */

  res.json({
    ok:true,
    uid:guardia.id,
    name:guardia.guardName

  })

  }catch(error){
    console.log(error)
    res.status(500).json({
      ok:false,
      msg:'Por favor hable con el administador'
    })
  }

};



module.exports = {
  createGuard,
  createBike,
  loginUser,
};
