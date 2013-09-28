goog.provide("Collection");

goog.require("DateModel");

//Collection

Collection = Backbone.Collection.extend({
  model: DateModel,
  url: '/list'
});
	
