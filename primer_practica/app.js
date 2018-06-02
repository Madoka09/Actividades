var express = require('express');
var app  =  express();

app.get('/',(req,res) => res.send('Pantalones de popo'));
app.listen(3000,() => console.log('Escushando por el puerto 3000'));