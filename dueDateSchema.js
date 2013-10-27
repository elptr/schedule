var mongoose = require('mongoose');
var express = require("express");
var app = express();


/* Mongo - Mongoose */
var Schema = mongoose.Schema;  

var dueDateSchema = new Schema({
	dueDate: Date,
  	fdlmp:Date
},  { collection: 'dueDate' });
 	
module.exports.DueDate = mongoose.model("DueDate", dueDateSchema);



