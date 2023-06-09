
// Importar las dependencias
const express = require('express');
const { Router } = require('./routes/routes');
const { connect } = require('./database/config');
const app = express();
//require('dotenv').config()
const cors = require('cors');
require('dotenv').config();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static('public'));


//Configuaracion express
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use("/",Router)


app.get("/", (req, res) => {
    res.render("index", { titulo: "Matriculate " });
});

const port = process.env.PORT || 3000
//conectando a la DB
connect() 



// Iniciar el servidor HTTP en el puerto 3000
app.listen(port, function () {
    console.log('Servidor escuchando en http://localhost:4000');
});
