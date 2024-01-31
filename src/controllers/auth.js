const { matchedData } = require("express-validator")
const { userModule } = require("../models")
const { encrypt, compare } = require("../utils/handlePassword")
const { tokenSing } = require("../utils/handleJwt")
const { handleError } = require("../utils/handleError")

/**
 * Se encarga de registrar un usuari
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password)
        const body = { ...req, password }
        const dataUser = await userModule.create(body)
        /* NOTE: con esta linea de abajo lo que le estamos indicando es que no aparezca el parametro password, de tal manera que solo muestra la demas dataUser, es una especie de filtrado el cual evita que no se muestre ciertos parametros */
        dataUser.set('password', undefined, { strict: false })
        const data = {
            token: await tokenSing(dataUser),
            user: dataUser
        }

        res.send(data)
    } catch (error) {
        handleError(res, "ERROR_REGISTER_USER")
    }
}
/**
 * Este controlador es el encargado de logear a una persona
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        /**
         * en este punto verificamos que el usuario este en la base de datos
         */
        const user = await userModule.findOne({ email: req.email }).select('password name rol email')
        if (!user) {
            handleError(res, "USER_NOT_EXISTS", 404)
            return
        }
        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword)
        if (!check) {
            handleError(res, "PASSWORD_INVALID", 401)
            return
        }
        /* le comentamos al modelo que el password se oculte */
        user.set('password', undefined, { strict: false })
        const data = {
            /* ponemos un await en el toke, para que devuelva el token */
            token: await tokenSing(user),
            user
        }
        res.send({ data })

    } catch (error) {
        handleError(res, "ERROR_LOGIN_USER")
    }
}

module.exports = { registerCtrl, loginCtrl }
