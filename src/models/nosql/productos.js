const mongoose = require('mongoose');

const ProductosSchema = {

    id: { type: String },

    clase: { type: String },

    desc_prod: { type: String },

    precio: { type: Number },

    unidad: { type: String },
}
module.exports = mongoose.model("productos", ProductosSchema)