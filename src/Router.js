goog.provide("Router");


$(document).ready(function(){
	


var Model = Backbone.Model.extend({
	urlRoot: '/api/items',
    defaults: {
	date: "",
  	hour: 0,
  	minute: 0,
  	fdlmp: ""
    }
});

var model = new Model();

var Collection = Backbone.Collection.extend({
  model: Model,
  url: '/api/items'
});

var collection = new Collection();
console.log(collection);
var res;

var ViewMain = Backbone.View.extend({
	el: "#container",
	initialize: function(){
		this.template = Handlebars.templates['dashboard']
	},
	render:function(){
		res = this.template(model.toJSON());
		//console.log(res);
		this.$el.html(res);
		return this;
	}
});


var view = new ViewMain({})


var Router = Backbone.Router.extend({
	routes:{
		"":"dashboard"
	},
	
	dashboard: function(){
		console.log("dashboard");
		
		collection.fetch({
			
			reset:true,
			success:function(){
				view.render();
			}
		});
	}
	
});


	var app = new Router();
	Backbone.history.start();
});

