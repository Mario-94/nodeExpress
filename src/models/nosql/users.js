const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        age: { type: Number },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            select: false
        },
        role: {
            type: ['user', 'admin'],
            default: 'user'
        }
    },
    {
        timestamps: true, /* TODO: crea la fecha de creacion y de actualizacion createdAt, updateAt */
        versionKey: false
    });
// mongoose.model("nombre de la tabla o coleccion", UsersSchema);
module.exports = mongoose.model("user", UsersSchema);