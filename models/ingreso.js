const { Schema, model } = require("mongoose");

const IngresoSchema = Schema({
  rutAlumno: {
    type: Schema.Types.String,
    ref: "Bike", 
    required: true,
  },
  nombreAlumno: {
    type: Schema.Types.String,
    ref: "Bike", 
    required: true,
  },
  biciAlumno: {
    type: Schema.Types.String,
    ref: "Bike",
    required: true,
  },
  guardia:{
    type: Schema.Types.String,
    ref: "Guard",
    required: true,
  },
  horaIngreso: {
    type: String,
    required: true,
  },
  horaSalida: {
    type: String,
  },
});

IngresoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();

  object.id = _id;
  return object;
});

module.exports = model('Ingreso', IngresoSchema);