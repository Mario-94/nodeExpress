const express = require('express');
const uploadMiddleware = require('../utils/handleStorage');
const { createItem } = require('../controllers/storage');
const router = express.Router();



router.post('/', uploadMiddleware.single('myFile'), createItem)

module.exports = router