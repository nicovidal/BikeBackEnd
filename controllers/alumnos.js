const { response } = require("express");

const Bike = require("../models/Bike");

const getAlumnos = async (req, res = response) => {
  try {
    // Obtener todos los alumnos
    const alumnos = await Bike.find();

    res.json({
      ok: true,
      alumnos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarAlumno = async (req, res = response) => {
  const alumnoId = req.params.id;

  const uid = req.uid;

  try {
    const alumno = await Bike.findById(alumnoId);

    if (!alumno) {
      return res.status(404).json({
        ok: false,
        msg: "Alumno no existe por ese id",
      });
    }

    const nuevoAlumno = {
      ...req.body,
      user: uid,
    };

    const alumnoActualizado = await Bike.findByIdAndUpdate(
      alumnoId,
      nuevoAlumno,
      { new: true }
    );

    res.json({
      ok: true,
      alumno: alumnoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const eliminarAlumno = async (req, res = response) => {
  const alumnoId = req.params.id;
  /*     const uid=req.uid; */

  try {
    const alumno = await Bike.findById(alumnoId);

    if (!alumno) {
      return res.status(400).json({
        ok: false,
        msg: "Alumno no existe",
      });
    }

    await Bike.findByIdAndDelete(alumnoId);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};


const getAlumnosRut = async (req, res = response) => {
  try {
    const rut = req.params.rut;

    if (!rut) {
      return res.status(400).json({
        ok: false,
        msg: "Se requiere proporcionar el parámetro 'rut'",
      });
    }

    // Buscar el alumno por rut
    const alumno = await Bike.findOne({ registerRut: rut });

    if (alumno) {
      res.json({
        ok: true,
        alumno,
      });
    } else {
      res.status(404).json({
        ok: false,
        msg: "Alumno no encontrado",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = { getAlumnos, getAlumnosRut, eliminarAlumno, actualizarAlumno };





