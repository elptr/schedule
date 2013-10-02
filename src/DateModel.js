goog.provide("DateModel");


//DateModel
DateModel = Backbone.Model.extend({
	urlRoot: '/item',
    defaults: {
		date: "",
	  	hour: 0,
	  	minute: 0
	}
});
	


