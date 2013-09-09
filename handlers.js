var mongoose = require('mongoose');
var express = require("express");
var app = express();
var Time = require('./model').Time;


module.exports.all = function(req, res){
	var dbData = Time.find({}, function(err, docs){
		if(err) 'db find error';
		res.send(docs);
	})
};


module.exports.add = function(req, res){
	//To save in db
	var date = req.body.date;
	var fdlmp = req.body.fdlmp;
	var hours = req.body.hours;
	var minutes = req.body.minutes;
	
	var mvTime = new Time({
		today:Date.now(),
		date: date,
	  	hour:hours,
	  	minute:minutes,
	  	fdlmp:fdlmp
	});
	
	mvTime.save(function(err, mvTime){
		if(err){console.log(err)}
		else res.redirect('/api/items');
	});
}
