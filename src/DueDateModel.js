goog.provide("DueDateModel");


//DateModel
DueDateModel = Backbone.Model.extend({
	urlRoot: '/duedate',
    defaults: {
		dueDate: null,
	  	fdlmp: null
	}
});
	


