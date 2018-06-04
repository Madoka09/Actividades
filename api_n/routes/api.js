var express = require('express');

var api = express.Router(); //Nos permite comunicar dos archivos

api.get("/users",function(request,response){
    response.send("<h1>Estoy en API - users </h1>");
});

api.get("/numeros/:min/:max",function(request,response){
    var min = parseInt(request.params.min);
    var max = parseInt(request.params.max);

    if(isNaN(min)||isNaN(max)){
        response.status(400);
        response.json({
            error:"Bad Request!"
        });

        return;
    }
    var result = Math.round((Math.random()*(max-min))+min);
    response.json({
        result:result
    });
});

module.exports = api;