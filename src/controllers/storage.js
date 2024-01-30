const { matchedData } = require("express-validator")
const { storageModule } = require("../models")
const { handleError } = require("../utils/handleError")
const fs = require('fs');

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`
const getItems = async (req, res) => {
    try {
        const data = await storageModule.find()
        res.send({ data })
    } catch (error) {
        handleError(res, "ERROR_GET_ITEMS_STORAGE")
        console.log(error);
    }
}
const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const data = await storageModule.findById(id)
        res.send({ data })
    } catch (error) {
        handleError(res, "ERROR_GET_ITEM_STORAGE")
        console.log(error);
    }
}
const createItem = async (req, res) => {
    try {
        const { body, file } = req
        const fileData = {
            fileName: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await storageModule.create(fileData)
        res.send({ data })
    } catch (error) {
        handleError(res, "ERROR_CREATE_STORAGE")
    }
}
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req)
        const data = await storageModule.findByIdAndUpdate(id)
        res.send({ data })
    } catch (error) {
        handleError(res, "ERROR_UPDATE_STORAGE")
    }
}
const deleteItem = async (req, res) => {
    try {

        const { id } = matchedData(req)
        const dataFile = await storageModule.findById(id)
        await storageModule.findByIdAndDelete(id)
        const { fileName } = dataFile;
        const filePath = `${MEDIA_PATH}/${fileName}`
        fs.unlinkSync(filePath)
        const data = {
            filePath,
            delete: 1
        }
        res.send(data)
    } catch (error) {
        handleError(res, "ERROR_DELETE_STORAGE")
    }
}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }