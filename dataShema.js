var mongoose = require('mongoose');
var express = require("express");
var app = express();


/* Mongo - Mongoose */

var Schema = mongoose.Schema;
var timelineSchema = new Schema({
	date: Date,
  	hour:Number,
  	minute:Number
});
 	
module.exports.Time = mongoose.model("Time", timelineSchema);



