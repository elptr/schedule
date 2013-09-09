var mongoose = require('mongoose');
var express = require("express");
var app = express();


/* Mongo - Mongoose */
mongoose.connect('mongodb://localhost/node-test');
var Schema = mongoose.Schema;
  
var timelineSchema = new Schema({
	date: Date,
  	hour:Number,
  	minute:Number,
  	fdlmp:Date
});
 	
module.exports.Time = mongoose.model("Time", timelineSchema);



