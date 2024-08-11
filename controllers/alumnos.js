const { response } = require("express");

const Bike = require("../models/Bike");
const Ingreso = require("../models/ingreso");


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
      // Obtener el registro de ingreso del alumno
      const ingreso = await Ingreso.findOne({ rutAlumno: rut }).sort({ horaIngreso: -1 });


      // Modificar el objeto de respuesta del alumno para incluir la hora de ingreso o salida si está disponible
      const alumnoResponse = {
        registerID:alumno.registerID,
        registerName: alumno.registerName,
        registerRut: alumno.registerRut,
        registerBrand:alumno.registerBrand,
        horaIngreso: ingreso ? ingreso.horaIngreso : "",
        horaSalida: ingreso ? ingreso.horaSalida : "",
      };

      res.json({
        ok: true,
        alumno: alumnoResponse,
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





