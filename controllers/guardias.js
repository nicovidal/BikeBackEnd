const { response } = require("express");

const Guard = require("../models/Guard");

const getGuardias = async (req, res = response) => {
  const guardias = await Guard.find();

  res.json({
    ok: true,
    guardias,
  });
};

const actualizarGuardia = async (req, res = response) => {
  const guardiaId = req.params.id;

  const uid = req.uid;

  try {
    const guardia = await Guard.findById(guardiaId);

    if (!guardia) {
      return res.status(404).json({
        ok: false,
        msg: "Guardia no existe",
      });
    }

    const nuevoGuardia = {
      ...req.body,
      user: uid,
    };

    const guardiaActualizado = await Guard.findByIdAndUpdate(
      guardiaId,
      nuevoGuardia,
      { new: true }
    );

    res.json({
      ok: true,
      guardia: guardiaActualizado,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
}

  const eliminarGuardia = async (req, res = response) => {
    const guardiaId = req.params.id;

    try {
      const guardia = await Guard.findById(guardiaId);

      if (!guardia) {
        return res.status(400).json({
          ok: false,
          msg: "Guardia no existe",
        });
      }

      await Guard.findByIdAndDelete(guardiaId);

      res.json({ ok: true });
    } catch (error) {
      console.log(error);

      res.json(500).json({
        ok: false,
        msg: "Hable con el administrador",
      });
    }
};


module.exports = { getGuardias, actualizarGuardia, eliminarGuardia };
