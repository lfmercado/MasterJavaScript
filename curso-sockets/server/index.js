var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));


app.get('/hola-mundo', function(req, res){
    res.status(200).send({message: 'Hola Mundo '});
});

var messages = [{
    id: 1,
    text: 'Bienvenido al chat de NodeJs y Socket.io',
    nickname: 'bot navegador'
}]; 

//metodo que se encarga de recibir las conexiones de los clientes.  
io.on('connection', function(socket){
    console.log("Se ha iniciado Sesion desde la IP: " +socket.handshake.address);

    socket.emit('mesasages', messages);
    socket.on('add-message', function(data){
        messages.push(data);
        io.sockets.emit('mesasages', messages);
    });
});

server.listen(6677, function(){
    console.log("El servidor esta funcionano correctamente en http://localhost:6677");
});
