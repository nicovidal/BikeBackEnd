const { response } =require("express");
const Visita= require("../models/visitas");

const createVisitas = async (req, res = response) => {
    const { visitaRut } = req.body;

    try {
        let visita = await Visita.findOne({ visitaRut});

        visita = new Visita(req.body);

        await visita.save();

        res.json({
            ok: true,
            msg: "Visita creada."
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "No se creo",
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