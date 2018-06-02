var express = require('express');
var path = require('path'); //buscará dentro de "node/modules el modulo path"
var http = require('http');

var app = express();

var publicPath = path.join(__dirname,'public'); //ruta de la carpeta
app.use('/recursos',express.static(publicPath)); //Middleware?, La ruta hace que la informacion de la carpeta "public" se  muestre como "recursos"

app.use((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('No se encontró ningun archivo');
});

http.createServer(app).listen(3000);