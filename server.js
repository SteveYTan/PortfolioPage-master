var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var path = require('path');


var server = app.listen(8000);


app.use(bodyParser.urlencoded());


app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

  
app.use(express.static(__dirname + "/client/static"));

app.get("/", function (request, response){
    // hard-coded user data
   
    response.render('index');
}) 

   