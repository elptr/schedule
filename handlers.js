var mongoose = require('mongoose');
var express = require("express");
var Time = require('./model').Time;
var app = express();
//var hbs = require("hbs");
//var fs = require("fs");



//var templateSource = fs.readFileSync("public/list.hb", 'utf8');
//var template = hbs.compile(templateSource);
//res.send(template({items: docs}));

module.exports.all = function(req, res){
	var dbData = Time.find({}, function(err, docs){
		if(err) 'db find error';
		
		res.send(docs);
	})
};


module.exports.add = function(req, res){
	//To save in db
	var mvTime = new Time({
		_id: req.body._id,
		today:Date.now(),
		date: req.body.date,
	  	hour:req.body.hour,
	  	minute:req.body.minute,
	  	fdlmp:req.body.fdlmp
	});
	
	mvTime.save(function(err, mvTime){
		if(err){res.send(err)}
		else res.send('ok');
	});
}
