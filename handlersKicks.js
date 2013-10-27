var mongoose = require('mongoose');
var express = require("express");
var Kick = require('./kickSchema').Kick;
var app = express();

//Send All Items
module.exports.all = function(req, res){
	var dbData = Kick.find({}, function(err, docs){
		if(err) 'db find error';
		
		res.send(docs);
	})
};

//Save New Item in DB
module.exports.add = function(req, res){
	
	var mvKick = new Kick({
		_id: req.body._id,
		today:Date.now(),
		date: req.body.date,
	  	hour:req.body.hour,
	  	minute:req.body.minute
	});
	
	mvKick.save(function(err, mvKick){
		if(err){res.send(err)}
		else res.send('ok');
	});
};
//Get Item By ID
module.exports.getItem = function(req, res){
	var dbData = Kick.find({_id: req.params.id}, function(err, docs){
		if(err) 'db find error';
		//console.log(docs);
		res.send(docs[0]);
	});
};


//Save Edited Item (By ID)
module.exports.save = function(req, res){
	
	Kick.update({_id: req.params.id },
		{
			today: Date.now(),
			"date": req.body.date,
			"hour": req.body.hour,
			"minute": req.body.minute
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
	Kick.remove({_id: req.params.id },
        function(err, item){
			if (err) {
				res.send({"msg_12532":err});
			} else {
				res.send({"msg_12532":"ok"});
			}
		}
	);
};

