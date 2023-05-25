const Ingreso = require('../models/Ingreso');
const Bike = require('../models/Bike');

const crearIngreso = async (req, res = response) => {
  try {
    const { rut } = req.body;

    // Buscar el alumno en la base de datos por el rut
    const alumno = await Bike.findOne({ registerRut: rut });

    if (!alumno) {
      return res.status(400).json({
        ok: false,
        msg: "Alumno no encontrado",
      });
    }

    // Crear el ingreso con los datos obtenidos
    const ingreso = new Ingreso({
      rutAlumno: rut, // Utilizar el rut ingresado
      nombreAlumno: alumno.registerName,
      biciAlumno: alumno.registerBrand,
      horaIngreso: new Date().toISOString(),
      horaSalida: '',
    });

    await ingreso.save();

    res.json({
      ok: true,
      msg: "Ingreso realizado",
      ingreso,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
    });
  }
};

module.exports = { crearIngreso };