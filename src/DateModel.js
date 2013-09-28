
goog.provide("DateModel");

//goog.require("main");

//Model
DateModel = Backbone.Model.extend({
	urlRoot: '/item',
    defaults: {
		date: "",
	  	hour: 0,
	  	minute: 0,
	  	fdlmp: ""
	}
});
	


