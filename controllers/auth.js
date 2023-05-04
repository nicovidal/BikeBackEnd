const { response } = require("express");
const { validationResult } = require("express-validator");

const createGuard = (req, res = response) => {


  const { guardName, guardUser, guardPassword } = req.body;
  //errores
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({
        ok:false,
        errors:errors.mapped()
    })
  }

  res.status(201).json({
    ok: true,
    msg: "newGuard",
    guardName,
    guardUser,
    guardPassword,
  });
};

const createBike = (req, res = response) => {
  const {
    registerName,
    registerRut,
    registerCarrer,
    registerBrand,
    registerColor,
    registerID,
  } = req.body;

  res.json({
    ok: true,
    msg: "newBike",
    registerName,
    registerRut,
    registerCarrer,
    registerBrand,
    registerColor,
    registerID,
  });
};

const loginUser = (req, res = response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
          ok:false,
          errors:errors.mapped()
      })
    }

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
