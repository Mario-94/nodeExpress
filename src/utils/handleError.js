/**
 * Manejador de errores
 * @param {*} res 
 * @param {*} message 
 * @param {*} code 
 */
const handleError = (res, message = "algo sucedio", code = 403) => {
    res.status(code);
    res.send({ message: message })
}

module.exports = { handleError }