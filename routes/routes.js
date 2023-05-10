const express = require('express')
const { guardarPeli , verPeli, actualizarPelicula   } = require('../controllers/controllers')

const pelis = require('../models/peli')

const Router = express.Router()


//Ver lista de peliculas
Router.get('/', async (req, res) => {
    const objpelis = await pelis.find(); 
    res.render('index', { pelis: objpelis });
});


//Guardar peliculas
Router.post("/savePelicula" , guardarPeli)


//Actualizar peliculas 
Router.get('/pelicula/:id', async (req, res) => {
    const peliculaId = req.params.id;
    const x =  await pelis.find({_id:peliculaId});
    res.render('pelicula' ,{laPelicula:x});   
});
Router.post("/editPelicula" , actualizarPelicula)


Router.get('/eliminar/:id' , async (req , res) => {
    const peliculaId = req.params.id;
    await pelis.findByIdAndDelete({_id:peliculaId});
    res.redirect('/');  

})


module.exports = {
    Router
}