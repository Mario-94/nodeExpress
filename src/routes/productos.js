const express = require('express');
const { getItems } = require('../controllers/productos');
const { validatorPagination } = require('../validators/products');


const router = express.Router();
router.get('/', validatorPagination, getItems)
module.exports = router