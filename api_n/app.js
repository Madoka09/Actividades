var express = require('express');
var app = express();

var api = require("./routes/api")

app.use("/api",api);

app.get("/",function(request,response){
    response.send("<h1>HOME PAGE</h1>")
});

app.listen(3000,()=>{
    console.log("App corriendo en puerto 3000")
});