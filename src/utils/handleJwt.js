const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
/**
 * Debes de pasar el objeto del usuario
 *@param {*} user
*/
const tokenSing = async (user) => {

    const sing = jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            /* con esto indico que se expira a las dos horas el token, asi que seria necesario verificar que el token este activo desde el front */
            expiresIn: '2h'
        }
    )

    return sing
}


/**
 * Debes de pasra el token de sesion
 * @param {*} tokenJWt 
 * @returns 
 */

const verifyToken = async (tokenJWt) => {
    try {
        return jwt.verify(tokenJWt, JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = { tokenSing, verifyToken }