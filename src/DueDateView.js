goog.provide("DueDateView");

//One Item View
DueDateView = Backbone.View.extend({
	el: "#container",
	
	initialize: function(){
		this.template = Handlebars.templates['dueDate']
	},
	events: {
		"submit": "submit",
		"click .edit": "editDueDate"
	},
	
	editDueDate:function(){
		console.log("Hi");
	},
	submit: function(ev){
		var dueDateModel = this.$el.find("form").serializeObject();
		this.model.save(dueDateModel);
		console.log(dueDateModel);
		return false;
	},
	render:function(){
		var res = this.template(this.model.toJSON());
		this.$el.html(res);
		return this;
	}
});
	


