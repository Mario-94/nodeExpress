const express = require('express');
const { getItem, getItems } = require('../controllers/productos');

const router = express.Router();
router.get('/', getItems)
module.exports = router