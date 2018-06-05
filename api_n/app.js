var express = require('express');
var app = express();

var api = require("./routes/api");
var apiv2 = require("./routes/apiv2");

app.use("/api",api);
app.use("/apiv2",apiv2);

app.get("/",function(request,response){
    response.send("<h1>HOME PAGE</h1>")
});

app.listen(3000,()=>{
    console.log("App corriendo en puerto 3000")
});