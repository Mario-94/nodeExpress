
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const app = express();


const PORT = process.env.PORT || 3001
app.use(cors())
app.use(express.json())

app.use(express.static('./src/storage'));
// app.use('/static', express.static('storage'));


/* 
aqui invocamos a las rutas
 */
app.use("/api", require("./routes"))
app.listen(PORT, () => console.log(`Listo en el puerto ${PORT}`))
dbConnect().then(() => console.log('Conexion exitosa'))