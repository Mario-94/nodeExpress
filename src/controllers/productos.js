const { productosModule } = require("../models")
const { handleError } = require("../utils/handleError")
const { matchedData } = require("express-validator")

const getItems = async (req, res) => {
    try {
        const data = await productosModule.find({})
        res.send({ data })

    } catch (error) {
        handleError(req, "ERROR_GET_ITEMS_PRODUCTS")
    }
}
const getItem = async (req, res) => {
    try {
        const data = await productosModule.findById(id)
        res.send({ data })
    } catch (error) {
        handleError(req, "ERROR_GET_ITEM_PRODUCTS")
    }
}
const createItem = (req, res) => {
    const { body } = req
    console.log(body);
    res.send({ algo: "NO PODEMOS CREAR" })

}
const updateItem = (req, res) => {
    res.send({ message: "no podemos actualizar los datos" })
}
const deleteItem = (req, res) => {

    res.send({ message: "no podemos eliminar registros" })
}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }