const bcryptjs = require('bcryptjs')

/**
contraseña sin encriptar:123456789
*@param {*} passwordPlain
*/
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash;
}


/**
 * contraseña sin encriptar y contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 * @returns 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare }