const { response } =require("express");
const Visita= require("../models/visitas");

const createVisitas = async (req, res = response) => {
    const { visitaRut, visitaNombre, visitaMarca, visitaLugar, visitaMotivo } = req.body;
  
    try {
      const horaIngreso = new Date().toLocaleString(); 
  
      let visita = await Visita.findOne({ visitaRut });

      const salidaPendiente=await Visita.findOne({
        visitaRut,
        horaSalida:{$eq:""},
      })

      if(salidaPendiente){
        return res.status(400).json({
          ok:false,
          msg:"la visita no tiene hora de salida registrada anterior"

        })
      }
  
 
  
      visita = new Visita({
        visitaRut,
        visitaNombre,
        visitaMarca,
        visitaLugar,
        visitaMotivo,
        horaIngreso,
        horaSalida:""
      });
  
      await visita.save();
  
      res.json({
        ok: true,
        msg: "Visita creada.",
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "No se pudo crear la visita.",
      });
    }
  };

  const exitVisita = async (req, res = response) => {
    try {
      const { rut } = req.body;
  
      const visita = await Visita.findOne({ visitaRut: rut }).sort({ horaIngreso: -1 });
  
      if (!visita) {
        return res.status(400).json({
          ok: false,
          msg: "Visita no encontrada",
        });
      }
  
      visita.horaSalida = new Date().toLocaleString();
      await visita.save();
  
      res.json({
        ok: true,
        msg: 'Salida registrada correctamente',
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: 'Error en el servidor',
      });
    }
  };
  

const getVisitas = async (req, res = response) => {
    const visitas = await Visita.find();

    res.json({
        ok: true,
        visitas,
    });
};

module.exports = { createVisitas, getVisitas,exitVisita};