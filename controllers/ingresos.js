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

    // Verificar si el alumno tiene un ingreso pendiente con hora de salida vacía
    const ingresoPendiente = await Ingreso.findOne({
      rutAlumno: rut,
      horaSalida: { $eq: "" },
    });

    if (ingresoPendiente) {
      return res.status(400).json({
        ok: false,
        msg: "El alumno aún no ha registrado la hora de salida en su ingreso anterior",
      });
    }

    // Crear el ingreso con los datos obtenidos
    const ingreso = new Ingreso({
      rutAlumno:rut,
      nombreAlumno: alumno.registerName,
      biciAlumno: alumno.registerBrand,
      horaIngreso: new Date().toISOString(),
      horaSalida: "",
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



const actualizarSalida = async (req, res = response) => {
  try {
    const { rut } = req.body;

    // Buscar el último ingreso del alumno con el rut especificado
    const ultimoIngreso = await Ingreso.findOne({ rutAlumno: rut }).sort({ horaIngreso: -1 });

    if (!ultimoIngreso) {
      return res.status(400).json({
        ok: false,
        msg: "No se encontró ningún ingreso para el alumno",
      });
    }

    // Actualizar la hora de salida del último ingreso
    ultimoIngreso.horaSalida = new Date().toISOString();
    await ultimoIngreso.save();

    res.json({
      ok: true,
      msg: "Hora de salida actualizada para el último ingreso del alumno",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
    });
  }
};

const getIngresos = async (req,res=response)=>{

  const ingresos = await Ingreso.find();


  res.json({
    ok:true,
    ingresos,
  });

};


module.exports = { crearIngreso ,actualizarSalida,getIngresos};