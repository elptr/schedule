var mongoose = require('mongoose');
var express = require("express");
var app = express();


var Time = require('./model').Time;
var handlers = require('./handlers');


/* Express */
app.use("/", express.static(__dirname + "/public"));
app.use(express.bodyParser());

app.get('/list', handlers.all);
app.post('/item', handlers.add);

app.get('/item/:id', handlers.getItem); // Show Item By ID
app.put('/item/:id', handlers.save); //To Save Edited Ite

app.listen(3000);
console.log("listen 3000 ");

