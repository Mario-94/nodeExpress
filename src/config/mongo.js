
require('dotenv/config');
const mongoose = require('mongoose')
async function dbConnect() {
    const DB_URI = process.env.DB_URI

    await mongoose.connect(DB_URI)
}
module.exports = dbConnect