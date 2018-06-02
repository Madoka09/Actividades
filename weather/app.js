var path = require('path');
var express = require('express');
var zipdb = require('zippity-do-dah');
var Forecastio = require('forecastio');

var app = express();

//Introducir la API key de DarkSky
var weather = new Forecastio("c7b7c3fa6d3be889163a2320adbe7baf");

app.use(express.static(path.resolve(__dirname,"public")));
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine", "ejs");
app.get("/",function(req,res){
    res.render("index");
});

//Expresion regular para tener rutas dinamicas con codigos postales
app.get(/^\/(\d{5})$/,function(req,res,next){
    var zipcode = req.params[0];
    var location = zipdb.zipcode(zipcode);
    if(!location.zipcode){
        next(); //"salta" al siguiente middleware, osease, al siguiente "use"
        return;
    }

    var latitude = location.latitude;
    var longitude = location.longitude;

    weather.forecast(latitude, longitude, function(err, data){
        if(err){
            next();
            return;
        }
        res.json({
            zipcode: zipcode,
            temperature: data.currently.temperature
        });
    });
});

app.use(function(req,res){
    res.status(404).render("404");
});
app.listen(3000);