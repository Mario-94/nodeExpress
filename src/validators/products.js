const { check } = require('express-validator');
const { validationResults } = require('../utils/handleValidator');

const validatorPagination = [
    check("page")
        .exists()
        .notEmpty()
        .isInt({ min: 1 })
    ,
    check("perPage")
        .exists()
        .notEmpty()
        .isInt({ min: 1 }),

    (req, res, next) => {
        return validationResults(req, res, next)
    }
];



module.exports = { validatorPagination } 