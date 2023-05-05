const { response } = require("express");
const Guardia = require("../models/Guard");
const Alumno = require("../models/Bike");
const Admin = require("../models/admin");

const createGuard = async (req, res = response) => {
  const { guardUser, guardPassword } = req.body;
  try {
    let guardia = await Guardia.findOne({ guardUser });

    if (guardia) {
      return res.status(400).json({
        ok: false,
        msg: "Un guardia ya existe con ese usuario",
      });
    }

    guardia = new Guardia(req.body);

    await guardia.save();

    res.status(201).json({
      ok: true,
      msg: "registrado nuevo guardia",
      uid: guardia.id,
      name: guardia.guardName,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se creo",
    });
  }
};

const createBike = async (req, res = response) => {
  const { registerRut } = req.body;

  try {
    let alumno = await Alumno.findOne({ registerRut });
    if (alumno) {
      return res.status(400).json({
        ok: false,
        msg: "El Alumno ya existe",
      });
    }

    alumno = new Alumno(req.body);

    await alumno.save();

    res.json({
      ok: true,
      msg: "Nuevo Alumno agregado",
      uid: alumno.id,
      name: alumno.name,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se creo",
    });
  }
};

const createAdmin = async (req, res = response) => {
  try {
    const admin = new Admin(req.body);

    await admin.save();

    res.json({
      ok: true,
      msg: "Admin creado",
      uid: admin.id,
      name: admin.name,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se creo el admin",
    });
  }
};

const loginUser = async (req, res = response) => {
  const { guardUser, guardPassword } = req.body;

  try {
    const guardia = await Guardia.findOne({ guardUser });

    if (!guardia) {
      return res.status(400).json({
        ok: false,
        msg: "Su usuario de guardia no a sido creado",
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
      ok: true,
      uid: guardia.id,
      name: guardia.guardName,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administador",
    });
  }
};

const loginAdmin = async (req, res = response) => {

  const { adminUser, adminPassword } = req.body;

  try {
    const admin = await Admin.findOne({ adminUser });

    if (!admin) {
      return res.status(400).json({
        ok: false,
        msg: "Admin no existe",
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
      ok: true,
      uid: admin.id,
      name: admin.adminName,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor con los informaticos",
    });
  }
};

module.exports = {
  createGuard,
  createBike,
  loginUser,
  createAdmin,
  loginAdmin
};
