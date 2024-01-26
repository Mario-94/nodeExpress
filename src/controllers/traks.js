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
const getItem = (req, res) => {

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
const updateItem = (req, res) => {

}
const deleteItem = (req, res) => {

}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }