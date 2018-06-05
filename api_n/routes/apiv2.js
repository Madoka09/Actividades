var express = require('express');

var apiv2 = express();

apiv2.get("/soiio",function(request,response){
    response.send("<h1>Estoy en APIv2 - soiio </h1>");
});

apiv2.get("/numeros/:min/:max",function(request,response){
    var min = parseInt(request.params.min);
    var max = parseInt(request.params.max);

    if(isNaN(min)||isNaN(max)){
        response.status(400);
        response.set("Content-Type","text/html");

        return;
    }
    var result = Math.round((Math.random()*(max-min))+min);
    response.set("Content-Type","text/html");
    response.send("<h1> ESTA ES LA APIV2 D< </h1><h2>El numero es: "+ result);
});

module.exports = apiv2;