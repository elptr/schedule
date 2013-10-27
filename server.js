var mongoose = require('mongoose');
var express = require("express");
var app = express();


var Kick = require('./kickSchema').Kick;
var DueDate = require('./dueDateSchema').DueDate;

var handlersKicks = require('./handlersKicks');
var handlersDueDate = require('./handlersDueDate');

mongoose.connect('mongodb://localhost/node-test');


/* Data Shcema */
app.use("/", express.static(__dirname + "/public"));
app.use(express.bodyParser());

app.get('/list', handlersKicks.all);
app.post('/item', handlersKicks.add);

app.get('/item/:id', handlersKicks.getItem); // Show Item By ID
app.put('/item/:id', handlersKicks.save); //To Save Edited Item

app.delete('/item/:id', handlersKicks.deleteItem); //To Delete Item

/* Due Date Shcema */
app.post('/duedate', handlersDueDate.addDueDate);
app.get('/duedate', handlersDueDate.getDueDate);
app.put('/duedate/:id', handlersDueDate.editDueDate);


//Get Data For Charts
//app.get('/charts/duedate', handlersDueDate.getDDForCharts);
//app.get('/charts/filter', handlersDueDate.getFilterDataForCharts);


app.listen(3000);
console.log("listen 3000 ");

