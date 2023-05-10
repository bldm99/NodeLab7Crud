const mongoose = require('mongoose')
const Schema = mongoose.Schema



const mySchema = new Schema({
    nombre:{type:String},
    director:{type:String},
    imagen:{type:String},
   

})


module.exports = mongoose.model('pelicula' , mySchema)