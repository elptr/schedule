var mongoose = require('mongoose');
var express = require("express");
var app = express();


var Time = require('./model').Time;
var handlers = require('./handlers');


/* Express */
app.use("/", express.static(__dirname + "/timeline"));
app.use(express.bodyParser());

app.get('/api/items', handlers.all);
app.post('/api/items', handlers.add);


app.listen(3000);
console.log("listen 3000 ");

