const express = require('express')
const { guardarPeli ,
        verPeli,
        actualizarPelicula,
        guardarUsuario,
        verUsu,
        actualizarUsuario,
       } = require('../controllers/controllers')


const pelis = require('../models/peli')
const users = require('../models/usuarios')

const { schema } = require('../middleware/shemavalidator')
const { validacion} = require('../middleware/validacion')

const Router = express.Router()


//Ver lista de peliculas
/*Router.get('/', async (req, res) => {
    const objpelis = await pelis.find(); 
    res.render('index', { pelis: objpelis });
});*/

Router.get('/', verPeli);

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

/*----------------------Usuarios----------------------- */
//Router.get('/', verUsu);
//guardar usuario
Router.post("/users" , guardarUsuario)

//Actualizar Usuarios
Router.get('/usuario/:id', async (req, res) => {
    const usuarioId = req.params.id;
    const x =  await users.find({_id:usuarioId});
    res.render('usuario' ,{elUsuario:x});   
});
Router.post("/editUsuario" , actualizarUsuario)


//Eliminar usuario
Router.get('/eliminarusu/:id' , async (req , res) => {
    const usuId = req.params.id;
    await users.findByIdAndDelete({_id:usuId});
    res.redirect('/');  
})


module.exports = {
    Router
}