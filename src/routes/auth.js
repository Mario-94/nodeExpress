const express = require('express')
const router = express.Router();
const { validatorLogin, validatorRegister } = require('../validators/auth');
const { registerCtrl, loginCtrl } = require('../controllers/auth');

/* Extraer la informacion del token */
router.post("/login", validatorLogin, loginCtrl)

/* crear un registro */
router.post("/register", validatorRegister, registerCtrl)

module.exports = router
