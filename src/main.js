goog.provide("main");

$(document).ready(function(){
	//serializeObject - from form to JSON
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    
	//Model
	var Model = Backbone.Model.extend({
		urlRoot: '/item',
	    defaults: {
		date: "",
	  	hour: 0,
	  	minute: 0,
	  	fdlmp: ""
	    }
	});
	
	//Collection
	
	var Collection = Backbone.Collection.extend({
	  model: Model,
	  url: '/list'
	});
	
	//Views 
		//Dashboard View
	var DashboardView = Backbone.View.extend({
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
		//List View
	var ListView = Backbone.View.extend({
		el: "#container",
		initialize: function(){
			this.template = Handlebars.templates['list']
		},
		render:function(){
			console.log("res");
			var res = this.template({items:this.model.toJSON()});
			//console.log(res);
			this.$el.html(res);
			return this;
		}
	});
	
		//One Item View
	var ItemView = Backbone.View.extend({
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
			this.template = Handlebars.templates['item']
		},
		render:function(){
			console.log(this.model.toJSON());
			var res = this.template(this.model.toJSON());
			this.$el.html(res);
			return this;
		}
	});
	
	
	//Router
	var Router = Backbone.Router.extend({
		routes:{
			"":"dashboard",
			"list":"list",
			"add" : "add"
		},
		
		initialize:function(options){
			this.collection = null;
			this.dashboardView = null;
			this.listView = null;
			this.listView = null;
			this.itemView = null;
		},
		
		dashboard: function(){
			if(!this.dashboardView){
				this.dashboardView = new DashboardView({});
			}
			this.dashboardView.render();
		},
		
		list: function(){
			if(!this.Collection){
				this.collection = new Collection();
				this.listView = new ListView({model:this.collection});
			}
			var that = this;
			this.collection.fetch({
				reset:true,
				success: function(){
					that.listView.render();
				}
			});
		},
		add:function(){
			var modelItem = new Model();
			this.itemView = new ItemView({model:modelItem});
			this.itemView.render();
		}
		
		
	});

//Add _id to work with mongoose and Run BB
	Backbone.Model.prototype.idAttribute = '_id';
	var app = new Router();
	Backbone.history.start();
});



