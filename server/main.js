var express = require('express');
var app = express();
var server = require ('http').Server(app);
var io = require('socket.io')(server);

var messages = [{
  id: 1,
  texto: 'Hola soy un mensaje',
  autor: 'Karla Anahí Hernández H'

}];
app.use(express.static('public'));

app.get('/',function(req, res){
    res.status(200).send("Hola mundo desde Sockets");
});

io.on('connection',function(socket){
    console.log('Alguien se ha conectado con Socket')
     socket.emit('messages',messages);
     socket.on('new-messages',function(data){
      messages.push(data);
     socket.emit('messages',messages);
     
          }); 
});

    server.listen(3002, function(){
console.log("El servidor está corriendo en http://localhost:3002");

    });