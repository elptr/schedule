goog.provide("DueDChartsView");

//One Item View
DueDateView = Backbone.View.extend({
	el: "#due-date-header",
	
	initialize: function(){
		this.template = Handlebars.templates['dueDate']
	},
	render:function(){
		var res = this.template(this.model.toJSON());
		this.$el.html(res);
		return this;
	}
});
	


