// require('dotenv').config()
const { storageModule } = require("../models")

const PUBLIC_URL = process.env.PUBLIC_URL
const getItems = async (req, res) => {

}
const getItem = async (req, res) => {
    const data = await storageModule.find({})
    res.send({ data })
}
const createItem = async (req, res) => {
    const { body, file } = req

    const fileData = {
        fileName: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModule.create(fileData)

    res.send({ data })

}
const updateItem = (req, res) => {

}
const deleteItem = (req, res) => {

}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem }