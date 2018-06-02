var express = require('express');
var path = require('path')
var http = require('http');

var app = express();

var IP_MALVADA = //"::ffff:127.0.0.1";

app.use((request, response, next)=>{
    if(request.ip === IP_MALVADA){
        response.status(401).send("Intento de acceso no autorizado");
    } else {
        next();
    }
});

var publicPath = path.join(__dirname, 'public');
app.use('recursos', express.static(publicPath));

app.get('/',(request, response)=>{
    response.end('Bienvenido puerco');
});

app.get('/about',(request,response)=>{
    response.end('WELCOMEN to mai guebpeish');
});

app.get('/weather',(request,response)=>{
    response.end('TODAY WILL BE A HAPPY WEATER UWUr');
});

app.get('/bienvenida/:nombre',(request,response)=>{
    response.end('WELCOMEN PIECE OF SUCC WITH THE NAME OF '+request.params.nombre+' YOU FUCCING T H I C C SUCC'+'')
});

app.use((request,response)=>{
    response.writeHead(404,{'Content-type':'text/html'});
    response.end("<h2>404 tu gfesita not faund</h2>");
    //response.redirect("https://google.com");
});

http.createServer(app).listen(3000);