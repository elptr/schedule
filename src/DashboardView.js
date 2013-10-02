goog.provide("DashboardView");

//Dashboard View
DashboardView = Backbone.View.extend({
	el: "#container",
	initialize: function(){
		this.template = Handlebars.templates['dashboard']
	},
	render:function(){
		var res = this.template({});
		this.$el.html(res);
		return this;
	}
});
	



