const expresHandler = require('express-async-handler')

const bccrypt = require('bcryptjs')

const peli = require('../models/peli')
const usu = require('../models/usuarios')
const Joi = require('joi');

const { schema } = require('../middleware/shemavalidator')

//Cotrolador  lugar donde creamos diferentes funciones de logica para poder utilizarlos en el Router

//funcion para listar Peliculas
const verPeli = expresHandler(async (req, res) => {
    const tableUsu = await usu.find()

    const tablePeli = await peli.find()
    if (!tablePeli) {
        res.status(500).json({ error: "No found" })
    }
    res.render('index', { pelis: tablePeli, usuario: tableUsu });

})




//Funcion para Registrar Peliculas
const guardarPeli = expresHandler(async (req, res) => {
    const tablePeli = await peli.insertMany({
        nombre: req.body.nombre,
        director: req.body.director,
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
            director: req.body.edirector,
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


/* ------------------------------Usuarios------------------------- */

//Funcion pra listar usuarios
const verUsu = expresHandler(async (req, res) => {
    const tableUsu = await usu.find()
    if (!tableUsu) {
        res.status(500).json({ error: "No found" })
    }
    res.render('index', { usuario: tableUsu });

})

//Funcion para Registrar Usuarios
const encriptar = async (contraseña) => {
    const hash = await bccrypt.hash(contraseña, 10)
    return hash
}

const guardarUsuario = expresHandler(async (req, res) => {
    //encriptando la cosntraseña
    const encriptando = await encriptar(req.body.password)

    //destructurando
    const { name, email } = req.body
    //Validando 
    const { error, value } = schema.validate({
        name: name,
        email: email,
        password: encriptando,
    },
        { abortEarly: false }
    );

    if (error) {
        let { details } = error
        console.log({ error: details })
        res.redirect("/");
    } else {
        const tableUSu = await usu.insertMany(value)
        if (!tableUSu) {
            res.status(500).json({ error: "No found" })
        }
        res.redirect("/");
        y = "wefw"
    }
})

//Funcion para actualizar datos de los usuarios
const actualizarUsuario = expresHandler(async (req, res) => {
    const identificador = req.body.id
    const tableUsu = await usu.findByIdAndUpdate(
        identificador,
        {
            name: req.body.ename,
            email: req.body.eemail,
        },
        {
            new: true
        }
    )

    if (!tableUsu) {
        res.status(500).json({ message: "No exitoos" })
    }
    //res.status(200).json(tablePeli);
    res.redirect("/");
})




//Exportando funciones para el otro JS
module.exports = {
    guardarPeli,
    verPeli,
    actualizarPelicula,

    guardarUsuario,
    verUsu,
    actualizarUsuario,
}


//Borradires de ejemplo de validaciones conJoi
// Validar los datos utilizando Joi
/*const { error, value } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}).validate({
    name: req.body.name,
    email: req.body.email,
    password: encriptando,
});*/