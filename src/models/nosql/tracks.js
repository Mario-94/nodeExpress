const mongoose = require('mongoose');
const TrackSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        album: { type: String },
        cover: {
            type: String,
            validate: {
                validator: (req) => { return true }
            },
            message: "ERROR_URL",
        },
        artist: {
            name: {
                type: String,
            },
            nickName: {
                type: String
            },
            nationality: {
                type: String
            },


        },
        duration: {
            start: {
                type: Number
            },
            end: {
                type: Number
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        }
    },
    {
        timestamps: true, /* TODO: crea la fecha de creacion y de actualizacion createdAt, updateAt */
        versionKey: false
    });
module.exports = mongoose.model("tracks", TrackSchema);