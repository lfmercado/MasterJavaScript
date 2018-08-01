'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var project_routes = require('./routes/project');
var app = express();

//Cargar Archivos De Rutas


//middlewares una capa que se ejecuta antes de ejecutar la accion de un controlador
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use('/api', project_routes);

//Rutas
/**
app.get('/', (req, res)=>{
    res.status(200).send(
        "<h1>Hola mundo desde mi primera ruta con nodeJS</h1>"
    )
});
//El req es el parametro que recibe los json por medio del post desde la web hacia la api, por medio del metodo "params('nombre')" o "body.nombre" puedo acceder a la propiedad especifica que este dentro del json
/** 
 *  req.body.name => forma para acceder a los atributos del json
 * req.query.web => el "web" es un nombre que se ingresa por medio de la url y se le asigna un valor, el metodo query es para poder
 * recibir los parametros que se ingresen por medio de la url
 * req.params.id => el params se utiliza normalmente para poder tomar un id que se encuentra en la url, como por ejemplo cuando se esta 
 * actualizando un registo, la id de ese registro se muestra en la url y este se toma para poder hacer la peticion update a la bdd

app.get('/test', (req, res)=>{
    res.status(200).send({
        message: "hola mundo desde mi primera ruta con nodeJS"
    })
});
*/

//Exportar Modulo
module.exports = app;