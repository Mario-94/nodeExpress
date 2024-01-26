const multer = require('multer');

const storage = multer.diskStorage({
    /* Recibe lo siguiente el tipico req,res cb* callback */
    destination: function (req, res, cb) {
        const pathStorage = `${__dirname}/../storage`
        cb(null, pathStorage)
    },
    filename: function (req, file, cb) {
        /* pop recoge el ultimo valor del array que crea ["name". "png"] */
        const ext = file.originalname.split(".").pop()
        const fileName = `file-${Date.now()}.${ext}`
        cb(null, fileName)
    }
})

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware