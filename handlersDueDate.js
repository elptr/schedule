var mongoose = require('mongoose');
var express = require("express");
var DueDate = require('./dueDateSchema').DueDate;
var app = express();


//Save New Date in DB
module.exports.addDueDate = function(req, res){
	
	var dueDate = new DueDate({
		_id: req.body._id,
		dueDate: req.body.dueDate,
  		fdlmp:req.body.fdlmp
	});
	
	dueDate.save(function(err, dueDate){
		if(err){res.send(err)}
		else res.send({"res": "ok"});
	});
};




//Get Item By ID
module.exports.getDueDate = function(req, res){
	var dueDate = DueDate.find({}, function(err, docs){
		if(err) 'db find error';
		res.send(docs&&docs.length?docs[0]:{});
	});
};


/*
// One method to update model - findOne
module.exports.editDueDate = function(req, res){

	var dueDate = DueDate.findOne(
		{_id:req.body._id},
		function(err, doc){
			if(err) {
				console.log("err" + err);
				res.send(err);
			}else {
				doc.dueDate = req.body.dueDate;
				doc.fdlmp = req.body.fdlmp;
				
				console.log(doc);
				doc.save(function(err, doc){
					if(err){res.send(err)};
					res.send(doc);
				});
			}
		}
	);

};
*/


// Another method to update model - update
module.exports.editDueDate = function(req, res){

	var conditions = {_id:req.body._id},
	update = {
		$set:{
				"dueDate": req.body.dueDate,
	  			"fdlmp":req.body.fdlmp
			}
	},
	options = {upsert:false};
  	
  	var dueDate = DueDate.update(conditions, update, options, callback);
  	
  	function callback (err, numAffected) {
	  if(err) console.log(err);
	  if(numAffected) console.log(numAffected);
	};
	
	res.send(dueDate);

};


/*
//Get Data - Due Date For Charts
module.exports.getDDForCharts = function(req, res){
	var dueDate = DueDate.find({}, function(err, docs){
		if(err) 'db find error';
		res.send(docs&&docs.length?docs[0]:{});
	});
};

//Get Data - Filter Data For Charts
module.exports.getFilterDataForCharts = function(req, res){
	var dbData = Time.find({}, function(err, docs){
		if(err) 'db find error';
		res.send(docs&&docs.length?docs[0]:{});
	});
};

*/
