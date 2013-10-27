goog.provide("KickModel");


//DateModel
KickModel = Backbone.Model.extend({
	urlRoot: '/item',
    defaults: {
		date: "",
	  	hour: 0,
	  	minute: 0
	}
});
	


