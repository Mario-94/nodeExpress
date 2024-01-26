const { productosModule } = require("../models")

const getItems = async (req, res) => {
    const data = await productosModule.find({})
    res.send({ data })
}
const getItem = (req, res) => {

}
const createItem = (req, res) => {
    const { body } = req
    console.log(body);
    res.send({ algo: 1 })

}
const updateItem = (req, res) => {

}
const deleteItem = (req, res) => {

}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }