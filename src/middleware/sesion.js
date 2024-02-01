const { verifyToken } = require('../utils/handleJwt')
const { handleError } = require('../utils/handleError')
const { userModule } = require('../models')
/**
 * middleware para ver si tiene el encabezado de autentificacion
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const authMiddleware = async (req, res, next) => {
    try {

        if (!req.headers.authorization) {
            handleError(res, "NEED_SESSION", 401)
            return
        }
        const token = req.headers.authorization.split(" ").pop()
        const dataToken = await verifyToken(token)

        if (!dataToken._id) {
            handleError(res, "ERROR_ID_TOKEN", 401)
            return
        }
        /* de esta manera se extrae la información del usuario que esta haciendo la peticion del archivo 
        NOTE:recordar poner un await para esperar hasta que responda, de lo contrario no funcionara
        */

        const user = await userModule.findById(dataToken._id)

        req.user = user
        next()
    } catch (error) {
        handleError(res, "NOT_SESSION", 401)
    }

}

module.exports = { authMiddleware }