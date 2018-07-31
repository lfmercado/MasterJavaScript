'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar Archivos De Rutas


//middlewares una capa que se ejecuta antes de ejecutar la accion de un controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS


//Rutas
app.get('/', (req, res)=>{
    res.status(200).send(
        "<h1>Hola mundo desde mi primera ruta con nodeJS</h1>"
    )
});

app.get('/test', (req, res)=>{
    res.status(200).send({
        message: "hola mundo desde mi primera ruta con nodeJS"
    })
});


//Exportar Modulo
module.exports = app;