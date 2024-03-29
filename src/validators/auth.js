const { check } = require('express-validator');
const { validationResults } = require('../utils/handleValidator');

const validatorRegister = [
    check("name")
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 99 }),
    check("age")
        .exists()
        .notEmpty(),
    check("password")
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 15 }),
    check("email")
        .exists()
        .notEmpty()
        .isEmail(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

const validatorLogin = [

    check("email")
        .exists()
        .notEmpty()
        .isEmail(),
    check("password")
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 15 }),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

module.exports = { validatorRegister, validatorLogin } 