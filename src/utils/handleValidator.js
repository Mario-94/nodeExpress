const { validationResult } = require("express-validator");
const validationResults = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        /* importante cuando quiero mandar el tipo de error como actontinuacion lo que debo de hacer es poner status */
        res.status(403)
        res.send({ error: err.array() })
    }
}
module.exports = { validationResults } 