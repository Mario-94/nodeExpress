const { check } = require('express-validator');
const { validationResults } = require('../utils/handleValidator');

const validatorCreateItems = [
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickName").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];
const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];



module.exports = { validatorCreateItems, validatorGetItem } 