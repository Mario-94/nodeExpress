const mongoose = require('mongoose');

const ProductosSchema = {

    ID: { type: Number },

    Articulo: {
        type: String
    },

    Lista: {
        type: String
    },

    Precio: { type: Number },

    Estatus: { type: String },

    Concepto: { type: String },

    fechaInicio: { type: String },


    fechaFin: { type: String },

    Descripcion1: { type: String },


    Linea: {
        type: String
    },

    Unidad: { type: String },

    Porcentaje: {
        type: Number
    }

}
module.exports = mongoose.model("productos", ProductosSchema)