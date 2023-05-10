const expresHandler = require('express-async-handler')

const peli = require('../models/peli')

//Cotrolador  lugar donde creamos diferentes funciones de logica para poder utilizarlos en el Router



//funcion para listar Peliculas
const verPeli = expresHandler( (req, res) => {
    const tablePeli =  peli.find()
    if (!tablePeli) {
        res.status(500).json({ error: "No found" })
    }
    res.status(200).json(tablePeli);
})


    

//Funcion para Registrar Peliculas
const guardarPeli = expresHandler(async (req, res) => {
    const tablePeli = await peli.insertMany({
        nombre: req.body.nombre,
        director:req.body.director,  
        imagen: req.body.imagen,
    })
    if (!tablePeli) {
        res.status(500).json({ error: "No found" })
    }
    //res.status(200).json(tablePeli);
    res.redirect("/");
})


const actualizarPelicula = expresHandler(async (req, res) => {

    const identificador = req.body.id
    const tablePeli = await peli.findByIdAndUpdate(
        identificador,
        {
            nombre: req.body.enombre,
            director:req.body.edirector,  
            imagen: req.body.eimagen,
        },
        {
            new: true
        }
    )

    if (!tablePeli) {
        res.status(500).json({ message: "No exitoos" })
    }
    //res.status(200).json(tablePeli);
    res.redirect("/");
})

/*const eliminarPelicula = expresHandler(async (req, res) => {

    const identificador = req.body.id
    const tablePeli = await peli.findByIdAndDelete(identificador)

    if (!tablePeli) {
        res.status(500).json({ message: "No exitoos" })
    }
    res.redirect("/");
})*/











//Exportando funciones para el otro JS
module.exports = {
    guardarPeli,
    verPeli,
    actualizarPelicula,

}