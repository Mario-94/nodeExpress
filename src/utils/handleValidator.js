const { validationResult } = require("express-validator");

try {
    validationResult(req).throw()
    return next()
} catch (error) {
    res.send(403)
    res.send({ error: error.array() })
}