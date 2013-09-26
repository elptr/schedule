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
	
		// List Item View
	var ListItemView = Backbone.View.extend({

        "tagName" : "li",

        events : {
            "click .edit-item" : "editItem",
            "click .delete-button" : "deleteItem"
        },
		deleteItem:function(){
			var that = this;
			that.model.destroy({
				success: function (model, response) {
					console.log("success");
					//that.options.parent.render();
               },
               error:function(model, xhr, options){
               	console.log("error");
               	console.log(model);
               	console.log(new Error("").stack);
               	console.log("error end");
               }
			});
		},
		
        editItem: function() {
            app.navigate("edit/"+this.model.get("_id"), {trigger: true});
        },

        initialize:function(){
            this.template = Handlebars.templates["list-item"];
        },
        render:function(){
            var res = this.template(this.model.toJSON());
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
            res = this.template({});
            this.$el.html(res);

            var models = this.model.models;

            var container = document.createDocumentFragment();

            for (var i = 0; i < models.length; i++) {

                var listIitemView = new ListItemView({
                    model: models[i],
                    parent: this
                });

                container.appendChild(listIitemView.render().el);
            }

            this.$el.find("#list-holder").html(container);

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
			this.template = Handlebars.templates['item'];
		},
		render:function(){
			//console.log(this.model.toJSON());
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
			"add" : "add",
			"edit/:id": "edit"
			//,  "list/:allBeforeThisDate": "filter"   , call   .filter(allBeforeThisDate), almost the same as   .list()
		},
		
		initialize:function(options){
			this.collection = null;
			this.dashboardView = null;
			this.listView = null;
			this.listView = null;
			this.itemView = null;
			this.editView = null;
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
				// TODO add following when you filter, it'll send parameters to the server -then-> request MongoDb with them:
				// data: { allBeforeThisDate: "11.11.2013", allAfterThisDate: "10.10.2013", .... },

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
		},
		edit: function(id){
            var that = this;
            that.m = new Model();
            that.m.set({"_id": id});
            that.m.fetch({            	
                success: function () {
					console.log(that.m);
					that.editView = new ItemView({model : that.m});
					that.editView.render(); 
                }
            });
        }
		
		
	});

//Add _id to work with mongoose and Run BB
	Backbone.Model.prototype.idAttribute = '_id';
	var app = new Router();
	Backbone.history.start();
});



