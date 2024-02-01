
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const morganBody = require('morgan-body');
const loggerStream = require('./utils/handleLoggers');

const app = express();


app.use(cors())
app.use(express.json())
app.use(express.static('./src/storage'));


morganBody(app, {
    noColors: true,
    /* con esta funcion lo que hacemos es no enviar todos los logs solo los que sean mensajes de error */
    skip: function (req, res) {
        return res.statusCode < 400 //de esta manera solo mandare los log que sean errores   
    },
    stream: loggerStream
})

const PORT = process.env.PORT || 3001
// app.use('/static', express.static('storage'));


/* 
aqui invocamos a las rutas
 */
app.use("/api", require("./routes"))
app.listen(PORT, () => console.log(`Listo en el puerto ${PORT}`))
dbConnect().then(() => console.log('Conexion exitosa'))