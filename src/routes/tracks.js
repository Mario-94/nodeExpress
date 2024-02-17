const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/traks');
const { validatorCreateItems, validatorGetItem } = require('../validators/tracks');
// const customHeader = require('../middleware/customHeader');
// const { authMiddleware } = require('../middleware/sesion');
const checkRol = require('../middleware/rol');

const router = express.Router();

// router.get('/', authMiddleware, getItems)
router.get('/', getItems)

// router.get('/:id', authMiddleware, validatorGetItem, getItem)
router.get('/:id', validatorGetItem, getItem)
// router.post('/', customHeader, validatorCreateItem, createItem)
/* la funcion anterior lo que me ayuda es para si en caso de que quiera agregar las cabeceras a mi create pues lo que debo realizar es utilizar el archivo customHeader */
// router.post('/', authMiddleware, checkRol(["admin"]), validatorCreateItems, createItem)

// router.put('/:id', authMiddleware, validatorGetItem, validatorCreateItems, updateItem)

// router.delete('/:id', authMiddleware, validatorGetItem, deleteItem)
router.post('/', validatorCreateItems, createItem)

router.put('/:id', validatorGetItem, validatorCreateItems, updateItem)

router.delete('/:id', validatorGetItem, deleteItem)

module.exports = router