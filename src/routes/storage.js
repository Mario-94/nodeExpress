const express = require('express');
const uploadMiddleware = require('../utils/handleStorage');
const { createItem, getItem, getItems, deleteItem } = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storage');
const router = express.Router();
// obtener la data
router.get("/", getItems)
// obtener el detalle
router.get("/:id", validatorGetItem, getItem)
// crear registro
router.post('/', uploadMiddleware.single('myFile'), createItem)
// eliminar registro
router.delete("/:id", validatorGetItem, deleteItem)
module.exports = router