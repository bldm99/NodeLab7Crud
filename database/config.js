const mongoose = require('mongoose')
async function connect() {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/Lab7")
        console.log("Conectado con Mogodb")
    } catch (error) {
        console.log(error)

    }
}

connect()

module.exports = {
    connect
}