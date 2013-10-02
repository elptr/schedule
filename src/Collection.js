goog.provide("Collection");

//Collection

Collection = Backbone.Collection.extend({
  model: DateModel,
  url: '/list'
});
	
