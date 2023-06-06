const { Schema, model } = require("mongoose");

const VisitaSchemas = Schema({
  visitaRut: {
    type: String,
    requiere: true,
  },
  visitaNombre: {
    type: String,
    requiere: true,
  },
  visitaMarca: {
    type: String,
    requiere: true,
  },
  visitaLugar: {
    type: String,
    requiere: true,
  },
  visitaMotivo: {
    type: String,
    requiere: true,
  },
  horaIngreso: {
    type: String,
    required: true,
  },
  horaSalida: {
    type: String,
  },
});

VisitaSchemas.method("toJSON", function () {
  const { _v, _id, ...object } = this.toObject();

  object.id = _id;
  return object;
});

module.exports = model("Visita", VisitaSchemas);
