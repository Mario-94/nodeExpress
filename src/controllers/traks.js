const { matchedData } = require("express-validator")
const { tracksModule } = require("../models")
const { handleError } = require("../utils/handleError")

const getItems = async (req, res) => {
    try {
        const data = await tracksModule.find({})
        res.send({ data })
    } catch (error) {
        handleError(res, 'ERROR_GET_ITEMS')
    }

}
const getItem = async (req, res) => {

    try {
        req = matchedData(req);
        const { id } = req
        const data = await tracksModule.findById(id);
        res.send({ data })
    } catch (error) {
        handleError(res, "ERROR_GET_ITEM")
    }
}
const createItem = async (req, res) => {

    try {
        const body = matchedData(req);
        /* matchedData con esta funcion lo que hace es que solo en base al modelo muestra la informacion que necesitamos no más la demas la descarta */

        const data = await tracksModule.create(body)
        res.send({ data })
    } catch (error) {
        handleError(res, 'ERROR_CREATE_ITEM')
    }

}
const updateItem = async (req, res) => {

    try {
        const { id, ...body } = matchedData(req)
        const data = await tracksModule.findByIdAndUpdate(id, body)

        res.send({ data })

    } catch (error) {
        handleError(res, 'ERROR_UPDATE_ITEM')
    }

}
const deleteItem = async (req, res) => {

    try {
        const { id } = matchedData(req)
        const data = await tracksModule.findByIdAndDelete(id)
        res.send({ data })

    } catch (error) {
        handleError(res, 'ERROR_DELETE_ITEM')
    }
}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }