const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/traks');
const { validatorCreateItem } = require('../validators/tracks');
const customHeader = require('../middleware/customHeader');

const router = express.Router();

router.get('/', getItems)

router.get('/:id', getItem)

// router.post('/', customHeader, validatorCreateItem, createItem)
/* la funcion anterior lo que me ayuda es para si en caso de que quiera agregar las cabeceras a mi create pues lo que debo realizar es utilizar el archivo customHeader */
router.post('/', validatorCreateItem, createItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router