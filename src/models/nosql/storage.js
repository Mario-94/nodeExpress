

const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
        },
        fileName: {
            type: String
        },

    },
    {
        timestamps: true, /* TODO: crea la fecha de creacion y de actualizacion createdAt, updateAt */
        versionKey: false
    });
// mongoose.model("nombre de la tabla o coleccion", userSchema);
module.exports = mongoose.model("storage", StorageSchema);
