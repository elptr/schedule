var mongoose = require('mongoose');
var express = require("express");
var app = express();


/* Mongo - Mongoose */

var Schema = mongoose.Schema;
var kickSchema = new Schema({
	date: Date,
  	hour:Number,
  	minute:Number
});
 	
module.exports.Kick = mongoose.model("Kick", kickSchema);



