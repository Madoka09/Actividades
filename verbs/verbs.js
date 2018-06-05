var express = require('express');
var app = express();

app.get('/',function(request,response){
    response.send('Usaste GET');
});

app.post('/',function(request,response){
    response.send('Usaste POST');
});

app.put('/',function(request,response){
    response.status(400).send('Hiku');
});

app.delete('/',function(request,response){
    response.status(500).send('Ejelejuej');
});

app.listen(3000);