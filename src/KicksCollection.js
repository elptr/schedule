goog.provide("KicksCollection");

//Collection

KicksCollection = Backbone.Collection.extend({
  model: KickModel,
  url: '/list'
});
	
