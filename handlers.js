var mongoose = require('mongoose');
var express = require("express");
var Time = require('./model').Time;
var app = express();
//var hbs = require("hbs");
//var fs = require("fs");



//var templateSource = fs.readFileSync("public/list.hb", 'utf8');
//var template = hbs.compile(templateSource);
//res.send(template({items: docs}));

//Send All Items

module.exports.all = function(req, res){
	var dbData = Time.find({}, function(err, docs){
		if(err) 'db find error';
		
		res.send(docs);
	})
};

//Save New Item in DB
module.exports.add = function(req, res){
	
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
};
//Get Item By ID
module.exports.getItem = function(req, res){
	var dbData = Time.find({_id: req.params.id}, function(err, docs){
		if(err) 'db find error';
		//console.log(docs);
		res.send(docs[0]);
	});
};


//Save Edited Item (By ID)
module.exports.save = function(req, res){
	
	Time.update({_id: req.params.id },
		{
			today: Date.now(),
			"date": req.body.date,
			"hour": req.body.hour,
			"minute": req.body.minute,
			"fdlmp": req.body.fdlmp
		},
         /*{$push: { 'sent-messages' : delivered }},{upsert:true},*/ 
         function(err, data) 
         {
			if (err) {
				console.log(req.body);
				res.send(err);
			} else {
				res.send('ok');
			}
		}
	);

};


//Delete Item From DB (By ID)
module.exports.deleteItem = function(req, res){
	Time.remove({_id: req.params.id },
        function(err, item){
			if (err) {
				res.send({"msg_12532":err});
			} else {
				res.send({"msg_12532":"ok"});
			}
		}
	);
};

