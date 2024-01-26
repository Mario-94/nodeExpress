const { check } = require('express-validator');
const validatorCreateItem = [
    check("name").exists().notEmpty().isLength({ min: 5, max: 90 }),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickName").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        try {
            valida
        } catch (error) {

        }
    }
];


module.exports = { validatorCreateItem }