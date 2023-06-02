const { response } =require("express");
const Visita= require("../models/visitas");

const createVisitas = async (req, res = response) => {
    const { visitaRut, visitaNombre, visitaMarca, visitaLugar, visitaMotivo } = req.body;
  
    try {
      const horaIngreso = new Date().toLocaleString(); 
  
      let visita = await Visita.findOne({ visitaRut });
  
      if (visita) {
        return res.status(400).json({
          ok: false,
          msg: "La visita ya existe.",
        });
      }
  
      visita = new Visita({
        visitaRut,
        visitaNombre,
        visitaMarca,
        visitaLugar,
        visitaMotivo,
        horaIngreso, 
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

const getVisitas = async (req, res = response) => {
    const visitas = await Visita.find();

    res.json({
        ok: true,
        visitas,
    });
};

module.exports = { createVisitas, getVisitas};