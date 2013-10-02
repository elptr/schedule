var mongoose = require('mongoose');
var express = require("express");
var app = express();


var Time = require('./dataShema').Time;
var DueDate = require('./dataShema').DueDate;

var handlersData = require('./handlersData');
var handlersDueDate = require('./handlersDueDate');

mongoose.connect('mongodb://localhost/node-test');


/* Data Shcema */
app.use("/", express.static(__dirname + "/public"));
app.use(express.bodyParser());

app.get('/list', handlersData.all);
app.post('/item', handlersData.add);

app.get('/item/:id', handlersData.getItem); // Show Item By ID
app.put('/item/:id', handlersData.save); //To Save Edited Item

app.delete('/item/:id', handlersData.deleteItem); //To Delete Item

/* Due Date Shcema */
app.post('/duedate', handlersDueDate.addDueDate);
app.get('/duedate', handlersDueDate.getDueDate);
//app.put('/duedate', handlersDueDate.saveDueDate);

app.listen(3000);
console.log("listen 3000 ");

