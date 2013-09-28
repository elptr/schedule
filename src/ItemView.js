goog.provide("ItemView");



//One Item View
ItemView = Backbone.View.extend({
	el: "#container",
	
	events: {
		"submit": "submit"
	},
	submit: function(ev){
		var itemModel = this.$el.find("form").serializeObject();
		this.model.save(itemModel);
		//console.log(itemModel);
		return false;
	},
	
	initialize: function(){
		this.template = Handlebars.templates['item'];
	},
	render:function(){
		//console.log(this.model.toJSON());
		var res = this.template(this.model.toJSON());
		this.$el.html(res);
		return this;
	}
});
	
	


