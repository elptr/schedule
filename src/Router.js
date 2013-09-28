goog.provide("Router");

//Router
Router = Backbone.Router.extend({
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
		if(!this.collection){
			this.collection = new Collection();
			this.listView = new ListView.ListView({model:this.collection});
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
		var modelItem = new DateModel();
		this.itemView = new ItemView({model:modelItem});
		this.itemView.render();
	},
	edit: function(id){
        var that = this;
        that.m = new DateModel();
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

